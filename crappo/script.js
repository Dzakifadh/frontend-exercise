function runAnimtion() {
  anime({
    targets: '.why-item',
    translateY: [200, 0],
    easing: 'spring(1, 40, 10, 0)',
    duration: 3e3,
    delay: 500,
    opacity: [0, 1],
  })
}

document.addEventListener('DOMContentLoaded', () => {
  anime({
    targets: '#navbar-crappo li',
    translateY: [-50, 0],
    easing: 'easeOutExpo',
    delay: 0,
    duration: 2500,
    delay: (e, t) => 0 + 150 * t,
    opacity: [0, 1],
  })
  anime({
    targets: '#logo',
    translateX: [-100, 0],
    easing: 'easeOutExpo',
    delay: 0,
    duration: 2500,
    opacity: [0, 1],
  })
  anime({
    targets: '.label-outer',
    translateY: [-50, 0],
    easing: 'spring(1, 40, 10, 0)',
    duration: 2500,
    opacity: [0, 1],
  })
  const percentage = document.querySelector('#percentage')
  discount = {
    counter: '0%',
  }
  anime({
    targets: discount,
    counter: '75%',
    round: 1,
    easing: 'linear',
    duration: 2500,
    update: function () {
      percentage.innerHTML = JSON.stringify(discount.counter).slice(1, -1)
    },
  })
  anime({
    targets: 'span#save',
    translateX: [-100, 0],
    easing: 'spring(1, 40, 10, 0)',
    duration: 5e3,
    delay: 500,
    opacity: [0, 1],
  })
  anime({
    targets: 'span#discount-title',
    translateX: [-200, 0],
    easing: 'spring(1, 40, 10, 0)',
    duration: 5e3,
    delay: 1e3,
    opacity: [0, 1],
  })
  var textWrapper = document.querySelector('.h1-anim')
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  )
  anime
    .timeline()
    .add({
      targets: '.h1-anim .letter',
      translateX: [-100, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: 'spring(1, 40, 10, 0)',
      duration: 1400,
      delay: (e, t) => 300 + 30 * t,
    })
    .add(
      {
        targets: 'img.hero-img',
        translateX: [100, 0],
        easing: 'spring(1, 40, 10, 0)',
        opacity: [0, 1],
        duration: 1400,
      },
      '-=2000'
    )
    .add(
      {
        targets: '.hero-desc',
        translateY: [100, 0],
        easing: 'spring(1, 40, 10, 0)',
        opacity: [0, 1],
        duration: 1400,
      },
      '-=2000'
    )
    .add(
      {
        targets: '#hero .btn-crappo-icon',
        translateY: [100, 0],
        easing: 'spring(1, 40, 10, 0)',
        opacity: [0, 1],
        duration: 1400,
      },
      '-=1800'
    )(
    (window.onscroll = (e) => {
      document.body.scrollTop > 100 || document.documentElement.scrollTop > 100
        ? ((document.getElementById('shrink-navbar').style.padding = '25px 0'),
          document
            .getElementById('shrink-navbar')
            .classList.add('scrolled-navbar'))
        : ((document.getElementById('shrink-navbar').style.padding = '45px 0'),
          document
            .getElementById('shrink-navbar')
            .classList.remove('scrolled-navbar'))
    })
  )
})
var whySection = new Waypoint({
  element: document.getElementById('why'),
  handler: () => {
    anime({
      targets: '#why .col-md-4',
      translateY: [200, 0],
      easing: 'spring(1, 40, 10, 0)',
      duration: 2e3,
      opacity: [0, 1],
      delay: (e, t) => 0 + 150 * t,
    })

    const e = document.querySelectorAll('.why-item h2')
    t = {
      chart: '$0B',
      person: '0M+',
      globe: 0,
    }
    anime({
      targets: t,
      chart: '$30B',
      round: 1,
      easing: 'linear',
      duration: 2500,
      update: () => {
        e[0].innerHTML = JSON.stringify(t.chart).slice(1, -1)
      },
    })
    anime({
      targets: t,
      person: '10M+',
      round: 1,
      easing: 'linear',
      duration: 2500,
      update: () => {
        e[1].innerHTML = JSON.stringify(t.person).slice(1, -1)
      },
    })
    anime({
      targets: t,
      globe: '195',
      round: 1,
      easing: 'linear',
      duration: 2500,
      update: () => {
        e[2].innerHTML = JSON.stringify(t.globe).slice(1, -1)
      },
    })
    anime({
      targets: '.why-item span',
      translateY: [100, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      delay: (e, t) => 0 + 200 * t,
      duration: 1400,
    })
    whySection.destroy()
  },
  offset: '90%',
})

var chooseCrappo = new Waypoint({
  element: document.getElementById('choose-crappo'),
  handler: () => {
    anime({
      targets: '#choose-crappo img',
      translateX: [-100, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1400,
    })
    anime({
      targets: '.choose-crappo',
      translateY: [100, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1400,
      delay: (e, t) => 0 + 600 * t,
    })
    chooseCrappo.destroy()
  },
  offset: '85%',
})

var earningSection = new Waypoint({
  element: document.getElementById('earning'),
  handler: () => {
    anime({
      targets: '.earning-crappo',
      translateY: [100, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1400,
      delay: (e, t) => 0 + 600 * t,
    })
    earningSection.destroy()
  },
  offset: '100%',
})

var tradeSecurelySection = new Waypoint({
  element: document.getElementById('trade-securely'),
  handler: () => {
    let tl = anime.timeline({
      easing: 'spring(1, 40, 10, 0)',
      duration: 1500,
    })
    tl.add({
      targets: '#trade-securely h2',
      translateY: [200, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1400,
      delay: 800,
    })
      .add(
        {
          targets: '.card-coin-start',
          translateX: [-200, 0],
          easing: 'spring(1, 40, 10, 0)',
          opacity: [0, 1],
        },
        '-=1000'
      )
      .add(
        {
          targets: '.card-coin-end',
          translateX: [200, 0],
          easing: 'spring(1, 40, 10, 0)',
          opacity: [0, 1],
        },
        '-=1000'
      )
      .add(
        {
          targets: '.card-coin-center',
          translateY: [200, 0],
          easing: 'spring(1, 40, 10, 0)',
          opacity: [0, 1],
        },
        '-=1500'
      )
    tradeSecurelySection.destroy()
  },
  offset: '80%',
})

var featuresSection = new Waypoint({
  element: document.getElementById('features'),
  handler: () => {
    anime({
      targets: '#features h2',
      translateY: [200, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: 200,
    })
    // Features 1

    featuresSection.destroy()
  },
  offset: '90%',
})

var featuresSection1 = new Waypoint({
  element: document.querySelector('.features-1'),
  handler: () => {
    anime({
      targets: '.invest-smart-crappo',
      translateY: [200, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: (e, t) => 0 + 400 * t,
    })
    anime({
      targets: '.features-1 img',
      translateX: [300, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: 800,
    })
    featuresSection1.destroy()
  },
  offset: '100%',
})

var featuresSection2 = new Waypoint({
  element: document.querySelector('.features-2'),
  handler: () => {
    anime({
      targets: '.features-2 img',
      translateX: [-200, -90],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: (e, t) => 0 + 600 * t,
    })
    anime({
      targets: '.detailed-statistic',
      translateY: [200, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: (e, t) => 0 + 400 * t,
    })
    featuresSection2.destroy()
  },
  offset: '100%',
})

var featuresSection3 = new Waypoint({
  element: document.querySelector('.features-3'),
  handler: () => {
    anime({
      targets: '.grow-profit',
      translateY: [200, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: (e, t) => 0 + 400 * t,
    })
    anime({
      targets: '.features-3 img',
      translateX: [300, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 1500,
      delay: 500,
    })
    featuresSection3.destroy()
  },
  offset: '100%',
})

var cta = new Waypoint({
  element: document.getElementById('cta'),
  handler: () => {
    anime({
      targets: '.card-cta',
      translateY: [300, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 2000,
    })
    anime({
      targets: '.card-cta h2',
      translateY: [300, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 2000,
      delay: 500,
    })
    anime({
      targets: '.card-cta p',
      translateY: [300, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 2000,
      delay: 800,
    })
    anime({
      targets: '.card-cta form',
      translateY: [300, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 2000,
      delay: 500,
    })
    cta.destroy()
  },
  offset: '90%',
})

var footerSection = new Waypoint({
  element: document.getElementById('footer'),
  handler: () => {
    anime({
      targets: '#footer .footer-anim',
      translateX: [50, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      duration: 200,
      delay: (e, t) => 0 + 50 * t,
    })
    anime({
      targets: '#footer .footer-anim-bottom',
      translateY: [-100, 0],
      easing: 'spring(1, 40, 10, 0)',
      opacity: [0, 1],
      delay: 1000,
    })
    footerSection.destroy()
  },
  offset: '100%',
})

var earningSection = new Waypoint({
  element: document.getElementById('why'),
  handler: () => {
    earningSection.destroy()
  },
  offset: '90%',
})
