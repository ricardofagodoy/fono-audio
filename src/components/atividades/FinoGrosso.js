import React from 'react';
import styles from './FinoGrosso.module.css';

import grosso_img from '../../assets/grossofino/grosso.jpg'
import fino_img from '../../assets/grossofino/fino.jpg'
import voltar from '../../assets/images/voltar.jpg'
import repetir from '../../assets/images/repetir.jpg'

import grosso from '../../assets/grossofino/grosso.mp3'
import fino from '../../assets/grossofino/fino.mp3'

const NIVEIS = 10

class FinoGrosso extends React.Component {

  constructor(props) {

    super(props)

    // Sons
    this.grosso = new Audio(grosso)
    this.fino = new Audio(fino)
    this.fino.volume = 0.2

    const niveis = this.initLevels()
    this.state = {niveis}

    this.play()
  }

  initLevels() {
    
    // Niveis
    const niveis = []

    for (let i = 0; i < NIVEIS; i++) {
    
      const type = Math.round(Math.random())
      
      niveis.push({
        id: i, 
        status: {}, 
        type: type,
        sound: type ? this.grosso : this.fino
      })
    }

    this.nivel = 0
    this.played = false

    return niveis
  }

  play() {

    if (this.nivel >= NIVEIS)
      return

    setTimeout(() => {
      this.state.niveis[this.nivel].sound.play()
      this.played = true
    }, 3000)
  }

  clicked = (e) => {

    if (!this.played)
      return

    if (e.target.id == this.state.niveis[this.nivel].type)
      this.state.niveis[this.nivel].status = {backgroundColor: 'green'}
    else
      this.state.niveis[this.nivel].status = {backgroundColor: 'red'}

      // Update state
      this.setState((s) => s)

      this.played = false
      this.nivel++;
      this.play()
  }

  voltar = () => this.props.history.push('/')

  repetir = () => {
    const niveis = this.initLevels()
    this.setState({niveis})
    
    this.play()
  }

  render() {

    const balls = []

    for (let i = 0; i < 10; i++)
      balls.push(
        <div key={i} className={styles.ball} style={this.state.niveis[i].status} />
      )

  return (
    <div>

      <div className={styles.balls}>
        {balls}
      </div>

      <img id={styles.voltar} src={voltar} onClick={this.voltar}/>
      <img id={styles.repetir} src={repetir} onClick={this.repetir}/>

      <div fluid="true" className={styles.grid}>
        <img id="1" className={styles.square} src={grosso_img} onClick={this.clicked}/>
        <img id="0" className={styles.square} src={fino_img} onClick={this.clicked}/>
      </div>
    </div>
  );
  }
}

export default FinoGrosso;