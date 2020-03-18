let resBody = (data, success, code, msg) => {
  return {
    data: data || '',
    success: success || true,
    code: code || 00,
    msg: msg || ''
  }
}

module.exports = resBody