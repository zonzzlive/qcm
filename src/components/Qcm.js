import React from "react";

class Qcm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      qcm: [
        {id: 1, question: '1+1 = ', bon:'2', r1: '1', r2 :'2', r3: '5', r4: 'r4'},
        {id: 2, question: '1+2 = ', bon:'2', r1: '1', r2 :'3', r3: '5', r4: 'r4'},
        {id: 3, question: '1+3 = ', bon:'2', r1: '1', r2 :'4', r3: '5', r4: 'r4'},
      ]
    };
    console.log(this.qcm);
    this.form = {id: null, question: null};
  }

  render() {
    console.log(this.qcm);
    return (
      <>
        <ul>
          {this.state.qcm.map(QcmItem => (
            <li key={QcmItem.id}>
            <question>
                {QcmItem.question}
                <input type="checkbox"/>
                <button onClick={() => this.setState(oldState => ({ qcm: oldState.qcm.filter(i => i.id !== QcmItem.id)}))}>x</button>
            </question>
            <r1>
                <div>
                    Réponse 1 : {QcmItem.r1}
                    <input type="checkbox"/>
                </div>
            </r1>
            <r2>
                <div>
                    Réponse 2 : {QcmItem.r2}
                    <input type="checkbox"/>
                </div>
            </r2>
            <r3>
                <div>
                    Réponse 3 : {QcmItem.r3}
                    <input type="checkbox"/>
                </div>
            </r3>
            <r4>
                <div>
                    Réponse 4 : {QcmItem.r4}
                    <input type="checkbox"/>
                </div>
            </r4>
            </li>
          ))}
        </ul>
        <form onSubmit={e => e.preventDefault() || this.setState(oldState => ({ qcm: [...oldState.qcm, {...this.form}] }))}>
          <input type="number" onInput={e => (this.form.id = e.target.value)}/>
          <input type="text" onInput={e => (this.form.question = e.target.value)}/>
          <input type="text" onInput={e => (this.form.r1 = e.target.value)}/>
          <input type="text" onInput={e => (this.form.r2 = e.target.value)}/>
          <input type="text" onInput={e => (this.form.r3 = e.target.value)}/>
          <input type="text" onInput={e => (this.form.r4 = e.target.value)}/>
          <select name="reponse">
            <option value=""> Quelle est la bonne réponse ? </option>
            <option value="1"> Choix 1 </option>
            <option value="2"> Choix 2 </option>
            <option value="3"> Choix 3 </option>
            <option value="4"> Choix 4 </option>
          </select>
          <button type="submit">Ajouter une question</button>
        </form>
      </>
    );
  }
}

export default Qcm;
