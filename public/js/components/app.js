webpackJsonp([0],{

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement('img', { src: '/img/bitcoin-logo.png', className: 'bitcoin-logo' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-6' },
            _react2.default.createElement(
              'h2',
              null,
              ' Enter Transaction '
            ),
            _react2.default.createElement(
              'label',
              null,
              ' Crypto Amount '
            ),
            _react2.default.createElement('input', { type: 'text', name: 'amount',
              onChange: this.props.onInputChange,
              value: this.props.globalState.cryptoAmount }),
            _react2.default.createElement(
              'label',
              null,
              ' Date '
            ),
            _react2.default.createElement(_reactDatepicker2.default, { selected: this.props.globalState.date,
              onChange: this.props.handleDateChange }),
            _react2.default.createElement(
              'button',
              { type: 'submit', onClick: this.props.checkProfit },
              ' Check Profits '
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

        _this.clickedBtn = function () {
            console.log('swag');
        };

        _this.state = {
            name: 'Joe'
        };
        return _this;
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            var _props$globalState$to = this.props.globalState.totalStatus,
                percent = _props$globalState$to.percent,
                newCP = _props$globalState$to.newCP,
                newSP = _props$globalState$to.newSP,
                title = _props$globalState$to.title;


            return _react2.default.createElement(
                'section',
                { id: 'Results' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement('div', { className: 'ads' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-12' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Your $',
                            newCP,
                            ' dollar investment is now '
                        )
                    ),
                    _react2.default.createElement(
                        'h1',
                        null,
                        newSP,
                        ' '
                    ),
                    _react2.default.createElement(
                        'h4',
                        null,
                        title,
                        ' ',
                        percent,
                        '% '
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'main-btn' },
                        'Create an account to keep track of your profits '
                    ),
                    _react2.default.createElement(
                        'a',
                        { href: '#', className: 'main-btn', onClick: this.props.goBack },
                        'Check Another Transaction '
                    ),
                    _react2.default.createElement('div', { className: 'ads' })
                )
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Home = __webpack_require__(230);

var _Home2 = _interopRequireDefault(_Home);

var _Results = __webpack_require__(231);

var _Results2 = _interopRequireDefault(_Results);

var _reactDatepicker = __webpack_require__(59);

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _axios = __webpack_require__(229);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_Component) {
    _inherits(Layout, _Component);

    function Layout() {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

        _this.state = {
            name: 'Joe',
            location: 'home',
            date: (0, _moment2.default)(),
            data: '',
            cryptoAmount: 1,
            status: '',
            totalStatus: '',
            title: ''

        };
        _this.routingSystem = _this.routingSystem.bind(_this);
        _this.handleDateChange = _this.handleDateChange.bind(_this);
        _this.checkProfit = _this.checkProfit.bind(_this);
        _this.onInputChange = _this.onInputChange.bind(_this);
        _this.goBack = _this.goBack.bind(_this);
        return _this;
    }

    _createClass(Layout, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var self = this;

            _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + (0, _moment2.default)().unix() + '&extraParams=crypto_profits_cp').then(function (response) {

                self.setState({
                    btcToday: response.data.BTC
                }, function () {
                    console.log(self.state);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'routingSystem',
        value: function routingSystem() {
            switch (this.state.location) {
                case 'home':
                    return _react2.default.createElement(_Home2.default, { handleDateChange: this.handleDateChange,
                        globalState: this.state,
                        onInputChange: this.onInputChange,
                        checkProfit: this.checkProfit });
                    break;
                case 'results':
                    return _react2.default.createElement(_Results2.default, { globalState: this.state,
                        goBack: this.goBack });
                    break;
                default:
                    return _react2.default.createElement(_Home2.default, null);
            }
        }
    }, {
        key: 'handleDateChange',
        value: function handleDateChange(date) {
            var _this2 = this;

            this.setState({
                date: date
            }, function () {
                return console.log(_this2.state.date.unix());
            });
        }
    }, {
        key: 'onInputChange',
        value: function onInputChange(event) {
            this.setState({
                cryptoAmount: event.target.value
            });
        }
    }, {
        key: 'goBack',
        value: function goBack() {
            this.setState({
                location: 'home',
                date: (0, _moment2.default)(),
                data: '',
                cryptoAmount: 1,
                status: '',
                totalStatus: '',
                title: ''
            });
        }
    }, {
        key: 'checkProfit',
        value: function checkProfit() {
            var self = this;

            _axios2.default.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=BTC,USD,EUR&ts=' + self.state.date.unix() + '&extraParams=crypto_profits_cp').then(function (response) {

                self.setState({
                    data: response.data.BTC
                }, function () {
                    var CP = self.state.data.USD;
                    var newCP = self.state.cryptoAmount * 100;
                    newCP = newCP * CP / 100;
                    var SP = self.state.btcToday.USD;
                    var newSP = self.state.cryptoAmount * 100;
                    newSP = newSP * SP / 100;

                    if (newCP < newSP) {
                        var gain = newSP - newCP;
                        var gainPercent = gain / newCP * 100;
                        gainPercent = gainPercent.toFixed(2);
                        console.log(self.state.cryptoAmount + ', bitcoin ' + SP + ', newCP: ' + newCP);
                        console.log('profit : %' + gainPercent);
                        self.setState({

                            location: 'results',
                            status: 'gain',
                            totalStatus: {
                                newCP: newCP,
                                newSP: newSP,
                                SP: SP,
                                percent: gainPercent,
                                title: 'Gain of '
                            }
                        });
                    } else {
                        var loss = newCP - newSP;
                        var lossPercent = loss / newCP * 100;
                        lossPercent = lossPercent.toFixed(2);
                        console.log('newSP: ' + newSP + ', SP ' + SP + ', newCP: ' + newCP);
                        console.log('loss percent is %' + lossPercent);

                        self.setState({

                            location: 'results',
                            status: 'loss',
                            totalStatus: {
                                newCP: newCP,
                                newSP: newSP,
                                SP: SP,
                                percent: lossPercent,
                                title: 'Loss of '
                            }
                        });
                    }

                    console.log(self.state);
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { 'class': 'home' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'header',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'logo', onClick: this.checkProfit },
                            'Crypto Profits'
                        ),
                        _react2.default.createElement(
                            'nav',
                            { className: 'menu' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: 'main-btn' },
                                'Register'
                            )
                        )
                    ),
                    this.routingSystem()
                )
            );
        }
    }]);

    return Layout;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(Layout, null), app);

/***/ })

},[250]);