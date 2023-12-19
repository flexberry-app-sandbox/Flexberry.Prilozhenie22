import { Serializer as КонтроллерSerializer } from
  '../mixins/regenerated/serializers/i-i-s-prilozhenie-2-контроллер';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтроллерSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
