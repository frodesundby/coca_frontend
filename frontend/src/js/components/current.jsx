var React = require('react');

var Current = React.createClass({
    render: function () {
        return (
            <div class="col-md-6 well">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img src="images/coca_select.png" height="30"/>
                    </div>
                    <div class="col-md-12">
                        <hr class="hr-style">
                    </div>

                </div>
                <div class="row">
                    <div class="col-md-2">
                        <p>vmType</p>
                    </div>
                    <div class="col-md-10">
                        <div class="btn-group">
                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                <span data-bind="label">Select One</span>&nbsp;<span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Item 1</a></li>
                                <li><a href="#">Another item</a></li>
                                <li><a href="#">This is a longer item that will not fit properly</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <p>CPU</p>
                    </div>
                    <div class="col-md-10">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select
                                CPU
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <p>Mem</p>
                    </div>
                    <div class="col-md-10">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select
                                mem
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <p>Disk</p>
                    </div>
                    <div class="col-md-10">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select
                                disk
                                <span class="caret"></span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-2">
                        <p>Memory</p>
                    </div>
                    <div class="col-md-10">
                        <div class="dropdown">
                            <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select
                                memory
                                <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">HTML</a></li>
                                <li><a href="#">CSS</a></li>
                                <li><a href="#">JavaScript</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <br>
                        <div class="col-md-9">

                        </div>
                        <div class="col-md-3">
                            <div >
                                <button type="button" class="btn-coca raised">Add</button>
                            </div>
                        </div>
                </div>
            </div>
        )
        }
        })
        module.exports = Current;