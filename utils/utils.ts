export const formatTimeStamp = (timeStamp: any) => {
  const day = timeStamp;
  const year = day.getFullYear();
  const month = ('0' + (day.getMonth() + 1)).slice(-2);
  const days = ('0' + day.getDate()).slice(-2);
  const hours = ('0' + day.getHours()).slice(-2);
  const minutes = ('0' + day.getMinutes()).slice(-2);
  const seconds = ('0' + day.getSeconds()).slice(-2);

  const dateString = month + '-' + days;
  const timeString = hours + ':' + minutes;

  const newTime = dateString + ' ' + timeString;

  return newTime;
};

export const getPhoneNumberFormat = (phone: string) => {
  let formatPhone = phone.replace(/[^0-9]/g, '');

  if (formatPhone.length === 8) {
    formatPhone = formatPhone.replace(/(\d{4})(\d{4})/, '$1-$2');
  } else if (formatPhone.length === 9) {
    formatPhone = formatPhone.replace(/^(\d{2})(\d{3})(\d{4})$/, `$1-$2-$3`);
  } else if (formatPhone.length === 10) {
    if (phone.indexOf('02') === 0) {
      formatPhone = formatPhone.replace(/(\d{2})(\d{4})(\d{4})/, '$1-$2-$3');
    } else {
      formatPhone = formatPhone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  } else if (formatPhone.length === 11) {
    formatPhone = formatPhone.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
  } else if (formatPhone.length === 12) {
    formatPhone = formatPhone.replace(/^(\d{4})(\d{4})(\d{4})$/, `$1-$2-$3`);
  }

  return formatPhone;
};
