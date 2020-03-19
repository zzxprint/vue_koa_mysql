let resBody = (data, success, msg, code) => {
  return {
    data: data ? data : '',
    success: (success === undefined || success === true) ? true : false,
    msg: msg ? msg : '',
    code: code ? code : 00
  }
}

module.exports = resBody