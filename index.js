function Matches(){
  this.getMatches = function (text) {

  }
}

new Vue({
  'el': '#app',
  template: '#template',
  data: {
    verse: '',
    placeholder: 'Paste or type the verses you want to read'
  },
  methods: {
    go() {
      // console.log('matches', matches);
      let verses = this.verse.split(';')

      verses.map((verse) => {
        const trimmedVerse = verse.trim();

        if (trimmedVerse.length) {
          this.openUrl(
            this.matches(trimmedVerse)
          )
        }        
      })
    },
    openUrl(url) {
      var win = window.open(url, '_blank');
      win.focus();
    },
    matches(texto) {
      return 'https://www.bibliaonline.com.br/nvi/' + texto.replace(' ', '/').replace('.', '/').toLowerCase()
    }
  }
})