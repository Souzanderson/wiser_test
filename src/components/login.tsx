import React from 'react'
import restConnection from '../services/connection'

export class LoginComponent extends React.Component<{}, { user: string, senha: string }> {

    public sucess: boolean = false
    public emailerror: string
    public passerror: string
    public passInput: HTMLElement
    public emailInput: HTMLElement

    constructor(props: any) {
        super(props);
        this.handleChangeUser = this.handleChangeUser.bind(this)
        this.handleChangeSenha = this.handleChangeSenha.bind(this)
        this.sendvalues = this.sendvalues.bind(this)
        this.state = { user: "", senha: "" }
    }

    test(){
        restConnection.test().then(res=>{
            console.log(res.data);
            
        })
    }

    handleChangeSenha({ target }) {
        this.setState({ senha: target.value })
    }

    handleChangeUser({ target }) {
        this.setState({ user: target.value })
    }

    async sendvalues() {
        console.log(this.state.user, this.state.senha);

        let resp = await restConnection.login(this.state.user, this.state.senha)
        try {
            let value = resp.data
            console.log(value);

            if (value['usererror']) {
                this.sucess = false
                this.emailerror = value['usererror']
                this.passerror = null
                this.emailInput.focus()
                this.setState({});
            }
            else if (value['passerror']) {
                this.sucess = false
                this.passerror = value['passerror']
                this.emailerror = null
                this.passInput.focus()
                this.setState({})
            }
            else if (value['sucess']) {
                this.emailerror = null
                this.passerror = null
                this.sucess = true
                this.setState({ user: "", senha: "" })
                console.log(value['sucesss'])
            }
        }
        catch (e) {
            console.log("Erro ao realizar login!")
        }
    }

    render() {
        return (
            <div className='grid2'>
                <div className='rgrid'>
                    <div className='blur'></div>
                </div>
                <div className='lgrid'>
                    <div className='form'>
                        <div className='title'>Olá, seja<br />bem-vindo!</div>
                        <br />
                        <div className='subtitle'>Para acessar a plataforma,<br /> faça seu login.</div>
                        <br />
                        <div className="textform">
                            <label>
                                Email
                            </label>
                            <br />
                            <input
                                type="text"
                                className={`input ${this.emailerror ? "invalid" : ""}`}
                                onChange={this.handleChangeUser}
                                value={this.state.user}
                                ref={(input) => { this.emailInput = input; }}
                            />
                            {this.emailerror ? <span className="error">Digite um email válido;  </span> : null}
                        </div>
                        <div className="textform">
                            <label>
                                Senha
                                </label>
                            <br />
                            {this.passerror ? <span className="error">   ({this.passerror})   </span> : null}
                            <input
                                type="password"
                                className={`input ${this.passerror ? "invalid" : ""}`}
                                onChange={this.handleChangeSenha}
                                value={this.state.senha}
                                ref={(input) => { this.passInput = input; }}
                            />
                        </div>
                        {this.sucess ? <div className="sucess">Login efetuado com sucesso!</div> : null}
                        <div className="button" onClick={this.sendvalues}>entrar</div>
                        <br />
                        <div className="recover">
                            Esqueceu seu login ou senha?<br />clique <a href="/">aqui</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

