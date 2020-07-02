import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import perfil from "./imagens/perfil.jpg";
import line from "./imagens/line.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/projeto_dev.css';


class projeto_gestor extends React.Component {


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
                        <a class="navbar-brand" href="home_dev.html"><Link to="/home_gestor"><img class="img1" src={Logo} /></Link></a>
                        <div class="nav_list">
                            <ul>
                                <li><a href="utilizadores_dev.html"><Link to="/utilizadores_gestor">Utilizadores</Link></a></li>
                                <li><a href="projeto_dev.html"><Link to="/projeto_gestor">Projeto</Link></a></li>
                                <li>
                                    <div class="dropdown">
                                        <a class="dropbtn">Nome</a>
                                        <div class="dropdown-content">
                                            <a href="#"><Link to="/infopessoal_gestor">Perfil</Link></a>
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



                <div class="row">
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Projetos em desenvolvimento</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card">

                            <form class="form-inline">

                                <div class="form-group mx-sm-3 mb-2">
                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Procurar" />
                                </div>
                                <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            </form>

                            <table class="table">

                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Nome Projecto</th>
                                        <th scope="col">Data Inicio</th>
                                        <th scope="col">Data Fim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.loadFillData()}

                                </tbody>
                            </table>
                        </div>
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
export default projeto_gestor;