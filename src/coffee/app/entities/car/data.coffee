define [], ->
  randomDate = (start = new Date(2012, 0, 1), end = new Date()) ->
    return new Date start.getTime() + Math.random() * (end.getTime() - start.getTime())

  description = '''
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  '''

  data = [
    {
      model: 'Audi A6 III (C6) Рестайлинг', year: "2009", description: description, price: "11000", createdAt: randomDate()
      photos: [
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/37290/413aa147d1b3812166e5a54b8265413e/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/68164/108ab691f29ea6ad15facfdb2aca1bd1/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/27462/08f952f289fb508adc35abc872237ee2/1200x900'}
      ]
    }, {
      model: 'Ford Focus II Рестайлинг', year: "2011", description: description, price: "9500", createdAt: randomDate()
      photos: [
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/53034/57f0608824111634742d5bf0ccff1670/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/45875/1d6bbebfd963b384460b2c904003450a/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/44691/f448883aec0468dc6b34d656e0dcafb7/1200x900'}
      ]
    }, {
      model: 'Mercedes-Benz E-klasse AMG IV', year: "2014", description: description, price: "35000", createdAt: randomDate()
      photos: [
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/58923/2342a95339688efc9c6953d7af4a5504/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/49812/52312afa2b4c8323e2146f85fcbf775a/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/39357/f7e76f84ce30218334f33fe1cf5a114d/1200x900'}
      ]
    }, {
      model: 'Mercedes-Benz V-klasse I', year: "1998", description: description, price: "7100", createdAt: randomDate()
      photos: [
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/50596/1a57ad1feda2dceb58222205d0955d51/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/50596/a199343604a18000fba1d300f5380480/1200x900'}
        {url: 'http://avatars.mds.yandex.net/get-autoru-all/29040/5d2adcecc5be5af1e152f8a74a66eaef/1200x900'}
      ]
    }, {
      model: 'Volkswagen Jetta VI', year: "2013", description: description, price: "11600", createdAt: randomDate()
      photos: [
        {url: 'https://avatars.mds.yandex.net/get-autoru-all/40658/751598b09681ebfd0660be53e4bc4f68/1200x900'}
        {url: 'https://avatars.mds.yandex.net/get-autoru-all/37899/ac6f55aa6adb25db5a27aeab5e06ec79/1200x900'}
        {url: 'https://avatars.mds.yandex.net/get-autoru-all/33204/ffc33254cc2734c673f355219dd06d3e/1200x900'}
      ]
    }
  ]

  data
