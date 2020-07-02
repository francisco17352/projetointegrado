import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import projetos_info from './projetos_info'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import line from "./imagens/line.svg";
import photo from "./imagens/photo.jpg";
import './css/utilizadores.css';
class utilizadores_rh extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/users_list";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listEmployee: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error);
            });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">

                    <nav class="navbar">
                        <a class="navbar-brand" href="home_rh.html"><Link to="/home_rh"><img class="img1" src={Logo} /></Link></a>
                        <div class="nav_list">
                            <ul>
                                <li><a href="utilizadores_rh.html"><Link to="/utilizadores_rh">Utilizadores</Link></a></li>
                                <li><a href="projeto_rh.html"><Link to="/projeto_rh">Projetos</Link></a></li>
                                <li>
                                    <div class="dropdown">
                                        <a class="dropbtn">Nome</a>
                                        <div class="dropdown-content">
                                            <a href="recursoshumanos.html"><Link to="/verperfil_rh">Perfil</Link></a>
                                            <a href="index.html"><Link to="/">Terminar Sessão</Link></a>
                                        </div>
                                    </div>
                                </li>

                                <li class="user">
                                    <a><img class="img2" src={user} /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div class=" row col-sm-12 col-lg-12 col-md-12 col-xl-12">
                    <h2>Utilizadores</h2>
                </div>

                <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                    <div class="card">

                        <form class="form-inline">

                            <div class="form-group mx-sm-3 mb-2">
                                <input type="password" class="form-control" id="inputPassword2" placeholder="Procurar" />
                            </div>
                            <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            <button type="menu" class="btndireita btn btn-success"><Link to="/criaruser">Adicionar Utilizadores</Link></button>
                        </form>


                        <table class="table">

                            <thead class="thead-light">
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">info</th>
                                    <th scope="col">Anos Empresa</th>
                                    <th scope="col">Função</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.loadFillData()}

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>



        );
    }
    loadFillData() {
        return this.state.listEmployee.map((data, index) => {
            return (
                <tr>
                    <th scope="row"><img class="photo" src={perfil} /></th>
                    <td><h6>{data.Nome}</h6> <div><a href="verperfil_dev.html"></a></div></td>
                    <td><button type="button" class="btn btn-info"><Link to={"/ver_perfil/" + data.ID_User} >Info</Link></button></td>
                    <td>{data.AnosEmpresa}</td>
                    <td>{data.TipoUser}</td>
                </tr>
            )
        });
    }
}
export default utilizadores_rh; 