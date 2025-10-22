const cuentas = require('../data/cuentas.json');

const getAllCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

const getCuentaById = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c._id === id);
  res.json({
    finded: !!cuenta,
    account: cuenta || null
  });
};

const getCuentaByQuery = (req, res) => {
  const { queryParam } = req.query;
  if (!queryParam) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  const results = cuentas.filter(c => 
    c._id === queryParam || 
    c.client.toLowerCase().includes(queryParam.toLowerCase()) || 
    c.gender.toLowerCase() === queryParam.toLowerCase()
  );

  if (results.length === 1) {
    return res.json({
      finded: true,
      account: results[0]
    });
  }

  res.json({
    finded: results.length > 0,
    data: results
  });
};

const getCuentasBalance = (req, res) => {
  const activeAccounts = cuentas.filter(c => c.isActive);
  
  // Convertir balance de string a numero
  const totalBalance = activeAccounts.reduce((sum, account) => {
    const balanceNumber = parseFloat(account.balance.replace(/[$,]/g, '')) || 0;
    return sum + balanceNumber;
  }, 0);

  res.json({
    status: activeAccounts.length > 0,
    accountBalance: totalBalance
  });
};

module.exports = {
  getAllCuentas,
  getCuentaById,
  getCuentaByQuery,
  getCuentasBalance
};