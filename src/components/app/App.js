import React from 'react';
import styles from './App.module.css';

class App extends React.Component {

  constructor(props) {

    super(props)

    this.state = {
      'atividades': [
        {'titulo': 'Som grosso e fino', 'url': '/finogrosso'},
        {'titulo': 'Curto e longo'},
        {'titulo': 'Alto e baixo'},
        {'titulo': 'Quantos apitos'}
      ]
    }
  }

  clickBox = url => {
    this.props.history.push(url)
  }

  render() {

    const atividades = []

    this.state.atividades.forEach(a => {

      atividades.push(
        <div key={a.titulo} className={styles.square} onClick={() => this.clickBox(a.url)}>
          <span className={styles.text}>{a.titulo}</span>
        </div>
      )
    })

    return (
      <div className={styles.App}>

        <div fluid="true" className={styles.grid}>
          {atividades}
        </div>
      </div>
    );
  }
}

export default App;