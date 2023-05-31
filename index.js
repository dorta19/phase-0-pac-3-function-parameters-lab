function introduction(firstName) {
    return (`Hi, my name is ${firstName}.`);
  }
  sayintroduction ("Aki")
  
  function introductionWithLanguage(firstName, language) {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
  }
  sayintroductionWithLanguage ("Aki")
  sayintroductionWithLanguage ("Ember.js")

  function introductionWithLanguageOptional(firstName, language = "JavaScript") {
    return (`Hi, my name is ${firstName} and I am learning to program in ${language}.`);
  }
  sayintroductionWithLanguageOptional ("Aki")
  sayintroductionWithLanguageOptional ("Ember.js")