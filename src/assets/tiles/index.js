import angularIcon from './icons/angular.png'
import firebaseIcon from './icons/firebase.png'
import gatsbyIcon from './icons/gatsby.png'
import graphqlIcon from './icons/graphql.png'
import reactIcon from './icons/react.png'
import rxjsIcon from './icons/rxjs.png'
import angularBackground from './backgrounds/angular.jpg'
import firebaseBackground from './backgrounds/firebase.png'
import gatsbyBackground from './backgrounds/gatsbyjs.jpg'
import graphqlBackground from './backgrounds/graphql.jpeg'
import reactBackground from './backgrounds/react.png'
import rxjsBackground from './backgrounds/rxjs.png'

export default [
  {
    title: 'Angular',
    subtitle: '2+ None of that AngularJS Shit',
    background: angularBackground,
    pathname: '/angular',
    cols: 1,
    icon: angularIcon
  },
  {
    title: 'Firebase',
    subtitle: `For when you're smart enough to see backends are arcaine`,
    background: firebaseBackground,
    pathname: '/firebase',
    cols: 2,
    icon: firebaseIcon
  },
  {
    title: 'GraphQL',
    subtitle: `Teaching the world to heal from Redux`,
    background: graphqlBackground,
    pathname: '/graphql',
    cols: 2,
    icon: graphqlIcon
  },
  {
    title: 'Gatsby',
    subtitle: `React meets GraphQL - What could be better?`,
    background: gatsbyBackground,
    pathname: '/gatsbyjs',
    cols: 1,
    icon: gatsbyIcon
  },
  {
    title: 'React',
    subtitle: `A better library that jQuery`,
    background: reactBackground,
    pathname: '/react',
    cols: 1,
    icon: reactIcon
  },
  {
    title: 'RxJS',
    subtitle: `Observe it alllllll`,
    background: rxjsBackground,
    pathname: '/rxjs',
    cols: 2,
    icon: rxjsIcon
  }
]
