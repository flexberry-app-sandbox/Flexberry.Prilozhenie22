import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie-2-должность-l');
  this.route('i-i-s-prilozhenie-2-должность-e',
  { path: 'i-i-s-prilozhenie-2-должность-e/:id' });
  this.route('i-i-s-prilozhenie-2-должность-e.new',
  { path: 'i-i-s-prilozhenie-2-должность-e/new' });
  this.route('i-i-s-prilozhenie-2-отчет-о-сервере-l');
  this.route('i-i-s-prilozhenie-2-отчет-о-сервере-e',
  { path: 'i-i-s-prilozhenie-2-отчет-о-сервере-e/:id' });
  this.route('i-i-s-prilozhenie-2-отчет-о-сервере-e.new',
  { path: 'i-i-s-prilozhenie-2-отчет-о-сервере-e/new' });
  this.route('i-i-s-prilozhenie-2-расположение-l');
  this.route('i-i-s-prilozhenie-2-расположение-e',
  { path: 'i-i-s-prilozhenie-2-расположение-e/:id' });
  this.route('i-i-s-prilozhenie-2-расположение-e.new',
  { path: 'i-i-s-prilozhenie-2-расположение-e/new' });
  this.route('i-i-s-prilozhenie-2-сенсоры-l');
  this.route('i-i-s-prilozhenie-2-сенсоры-e',
  { path: 'i-i-s-prilozhenie-2-сенсоры-e/:id' });
  this.route('i-i-s-prilozhenie-2-сенсоры-e.new',
  { path: 'i-i-s-prilozhenie-2-сенсоры-e/new' });
  this.route('i-i-s-prilozhenie-2-серверная-l');
  this.route('i-i-s-prilozhenie-2-серверная-e',
  { path: 'i-i-s-prilozhenie-2-серверная-e/:id' });
  this.route('i-i-s-prilozhenie-2-серверная-e.new',
  { path: 'i-i-s-prilozhenie-2-серверная-e/new' });
  this.route('i-i-s-prilozhenie-2-сотрудник-l');
  this.route('i-i-s-prilozhenie-2-сотрудник-e',
  { path: 'i-i-s-prilozhenie-2-сотрудник-e/:id' });
  this.route('i-i-s-prilozhenie-2-сотрудник-e.new',
  { path: 'i-i-s-prilozhenie-2-сотрудник-e/new' });
});

export default Router;
