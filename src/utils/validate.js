export const isEmail= (emailAdress) =>{
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regex)) return true;
    else return false;
  }
  export const isUpper=(str)=> {
    return /[a-z]/.test(str) && /[A-Z]/.test(str);
  }
  export const hasNumber=(password)=> {
    return /\d/.test(password);
  }
  export const validatePassword=(password)=> {
    const checklengthPwd = password.length <= 8 ? false : true;
    const checkContainUpperCase = this.isUpper(password);
    const checkContainNumber = this.hasNumber(password);
    console.log(checklengthPwd, checkContainUpperCase, checkContainNumber);
    if (checklengthPwd && checkContainNumber && checkContainUpperCase) {
      return true;
    }
    return false;
  }