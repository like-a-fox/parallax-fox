const EMAIL_REGEX = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default form =>
  !Object.keys(form).filter(
    key =>
      (key === 'email' && EMAIL_REGEX.test(form[key]) && form[key] === '') ||
      form[key] === null ||
      form[key] === undefined
  ).length > 0;
