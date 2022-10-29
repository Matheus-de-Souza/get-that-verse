const { createApp } = Vue

createApp({
  data() {
    return {
        reference: '',
        verses: [],
        bibleVersions: {
          naa: false,
          nvi: true,
          nvt: false,
        },
        placeholder: 'Paste or type the verses you want to read'
      }
    },
    methods: {
    addVerse() {
      if (this.reference.length) {
        this.verses.push(this.reference.trim());
        this.reference = '';
      }
    },
    go() {
      this.verses.forEach((reference) => {
        this.openUrl(
            this.matches(reference)
        )
      });
      this.verses = [];
    },
    removeVerse(verse) {
      const index = this.verses.indexOf(verse);
      this.verses.splice(index, 1);
    },
    openUrl(url) {
      window.open(url, '_blank');
    },
    matches(texto) {
      let versions = [];
      if (this.bibleVersions.naa) {
        versions.push('naa');
      }
      if (this.bibleVersions.nvi) {
        versions.push('nvi');
      }
      if (this.bibleVersions.nvt) {
        versions.push('nvt');
      }

      if (!versions.length) {
        versions.push('nvi')
      }

      return `https://www.bibliaonline.com.br/${versions.join('+')}/${texto.replace(' ', '/').replace('.', '/').toLowerCase()}`;
    }
  }
}).mount('#app')