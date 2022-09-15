function doppelChar(s) {
  const arrInput = [...s];
  for (let i; i < arrInput.length; i++) {
    if (arrInput.includes(i)){
        return i;
    } else {
      return s;
    }
}

doppelChar("zzz");
