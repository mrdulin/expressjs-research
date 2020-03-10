module.exports = async function(phone) {
  const result = await fetch(`external-api-call`);
  if (result.status !== 'success')
    return {
      error: 'Failed to send OTP!',
      data: null,
    };
  return {
    error: null,
    data: result,
  };
};
