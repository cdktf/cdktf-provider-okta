# `appUserSchemaProperty` Submodule <a name="`appUserSchemaProperty` Submodule" id="@cdktf/provider-okta.appUserSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchemaProperty <a name="AppUserSchemaProperty" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property okta_app_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.NewAppUserSchemaProperty(scope Construct, id *string, config AppUserSchemaPropertyConfig) AppUserSchemaProperty
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig">AppUserSchemaPropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig">AppUserSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion">ResetUnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique">ResetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf"></a>

```go
func PutArrayOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf"></a>

```go
func PutOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayEnum"></a>

```go
func ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayOneOf"></a>

```go
func ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetArrayType"></a>

```go
func ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalName"></a>

```go
func ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetExternalNamespace"></a>

```go
func ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetId"></a>

```go
func ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaster"></a>

```go
func ResetMaster()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetOneOf"></a>

```go
func ResetOneOf()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetScope"></a>

```go
func ResetScope()
```

##### `ResetUnion` <a name="ResetUnion" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnion"></a>

```go
func ResetUnion()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUnique"></a>

```go
func ResetUnique()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.resetUserType"></a>

```go
func ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppUserSchemaProperty resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.AppUserSchemaProperty_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.AppUserSchemaProperty_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.AppUserSchemaProperty_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.AppUserSchemaProperty_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppUserSchemaProperty resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppUserSchemaProperty to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppUserSchemaProperty that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppUserSchemaProperty to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput">AppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput">EnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput">ExternalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput">MasterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput">OneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput">UnionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput">UniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId">AppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType">ArrayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum">Enum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName">ExternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master">Master</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union">Union</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique">Unique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOf"></a>

```go
func ArrayOneOf() AppUserSchemaPropertyArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList">AppUserSchemaPropertyArrayOneOfList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOf"></a>

```go
func OneOf() AppUserSchemaPropertyOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList">AppUserSchemaPropertyOneOfList</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appIdInput"></a>

```go
func AppIdInput() *string
```

- *Type:* *string

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnumInput"></a>

```go
func ArrayEnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayOneOfInput"></a>

```go
func ArrayOneOfInput() interface{}
```

- *Type:* interface{}

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayTypeInput"></a>

```go
func ArrayTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enumInput"></a>

```go
func EnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNameInput"></a>

```go
func ExternalNameInput() *string
```

- *Type:* *string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespaceInput"></a>

```go
func ExternalNamespaceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.masterInput"></a>

```go
func MasterInput() *string
```

- *Type:* *string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.oneOfInput"></a>

```go
func OneOfInput() interface{}
```

- *Type:* interface{}

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnionInput`<sup>Optional</sup> <a name="UnionInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unionInput"></a>

```go
func UnionInput() interface{}
```

- *Type:* interface{}

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.uniqueInput"></a>

```go
func UniqueInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.appId"></a>

```go
func AppId() *string
```

- *Type:* *string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayEnum"></a>

```go
func ArrayEnum() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.arrayType"></a>

```go
func ArrayType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.enum"></a>

```go
func Enum() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalName"></a>

```go
func ExternalName() *string
```

- *Type:* *string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.externalNamespace"></a>

```go
func ExternalNamespace() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.master"></a>

```go
func Master() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Union`<sup>Required</sup> <a name="Union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.union"></a>

```go
func Union() interface{}
```

- *Type:* interface{}

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.unique"></a>

```go
func Unique() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaProperty.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaPropertyArrayOneOf <a name="AppUserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

&appuserschemaproperty.AppUserSchemaPropertyArrayOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const">Const</a></code> | <code>*string</code> | Value mapping to member of `array_enum`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title">Title</a></code> | <code>*string</code> | Display name for the enum value. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Value mapping to member of `array_enum`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Display name for the enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

### AppUserSchemaPropertyConfig <a name="AppUserSchemaPropertyConfig" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

&appuserschemaproperty.AppUserSchemaPropertyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AppId: *string,
	Index: *string,
	Title: *string,
	Type: *string,
	ArrayEnum: *[]*string,
	ArrayOneOf: interface{},
	ArrayType: *string,
	Description: *string,
	Enum: *[]*string,
	ExternalName: *string,
	ExternalNamespace: *string,
	Id: *string,
	Master: *string,
	MaxLength: *f64,
	MinLength: *f64,
	OneOf: interface{},
	Permissions: *string,
	Required: interface{},
	Scope: *string,
	Union: interface{},
	Unique: *string,
	UserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId">AppId</a></code> | <code>*string</code> | The Application's ID the user custom schema property should be assigned to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index">Index</a></code> | <code>*string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title">Title</a></code> | <code>*string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type">Type</a></code> | <code>*string</code> | The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | Array of values that an array property's items can be set to. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>interface{}</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType">ArrayType</a></code> | <code>*string</code> | The type of the array elements if `type` is set to `array`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum">Enum</a></code> | <code>*[]*string</code> | Array of values a primitive property can be set to. See `array_enum` for arrays. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName">ExternalName</a></code> | <code>*string</code> | External name of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | External namespace of the user schema property. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master">Master</a></code> | <code>*string</code> | Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength">MaxLength</a></code> | <code>*f64</code> | The maximum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength">MinLength</a></code> | <code>*f64</code> | The minimum length of the user property value. Only applies to type `string`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf">OneOf</a></code> | <code>interface{}</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions">Permissions</a></code> | <code>*string</code> | Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required">Required</a></code> | <code>interface{}</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope">Scope</a></code> | <code>*string</code> | determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union">Union</a></code> | <code>interface{}</code> | If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique">Unique</a></code> | <code>*string</code> | Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType">UserType</a></code> | <code>*string</code> | User type ID. By default, it is `default`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.appId"></a>

```go
AppId *string
```

- *Type:* *string

The Application's ID the user custom schema property should be assigned to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#app_id AppUserSchemaProperty#app_id}

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.index"></a>

```go
Index *string
```

- *Type:* *string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#index AppUserSchemaProperty#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of the schema property. It can be `string`, `boolean`, `number`, `integer`, `array`, or `object`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#type AppUserSchemaProperty#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayEnum"></a>

```go
ArrayEnum *[]*string
```

- *Type:* *[]*string

Array of values that an array property's items can be set to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#array_enum AppUserSchemaProperty#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayOneOf"></a>

```go
ArrayOneOf interface{}
```

- *Type:* interface{}

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#array_one_of AppUserSchemaProperty#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.arrayType"></a>

```go
ArrayType *string
```

- *Type:* *string

The type of the array elements if `type` is set to `array`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#array_type AppUserSchemaProperty#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#description AppUserSchemaProperty#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.enum"></a>

```go
Enum *[]*string
```

- *Type:* *[]*string

Array of values a primitive property can be set to. See `array_enum` for arrays.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#enum AppUserSchemaProperty#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalName"></a>

```go
ExternalName *string
```

- *Type:* *string

External name of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#external_name AppUserSchemaProperty#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.externalNamespace"></a>

```go
ExternalNamespace *string
```

- *Type:* *string

External namespace of the user schema property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#external_namespace AppUserSchemaProperty#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#id AppUserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.master"></a>

```go
Master *string
```

- *Type:* *string

Master priority for the user schema property. It can be set to `PROFILE_MASTER` or `OKTA`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#master AppUserSchemaProperty#master}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

The maximum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#max_length AppUserSchemaProperty#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

The minimum length of the user property value. Only applies to type `string`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#min_length AppUserSchemaProperty#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.oneOf"></a>

```go
OneOf interface{}
```

- *Type:* interface{}

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#one_of AppUserSchemaProperty#one_of}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

Access control permissions for the property. It can be set to `READ_WRITE`, `READ_ONLY`, `HIDE`. Default: `READ_ONLY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#permissions AppUserSchemaProperty#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#required AppUserSchemaProperty#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

determines whether an app user attribute can be set at the Personal `SELF` or Group `NONE` level.

Default value is `NONE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#scope AppUserSchemaProperty#scope}

---

##### `Union`<sup>Optional</sup> <a name="Union" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.union"></a>

```go
Union interface{}
```

- *Type:* interface{}

If `type` is set to `array`, used to set whether attribute value is determined by group priority `false`, or combine values across groups `true`.

Can not be set to `true` if `scope` is set to `SELF`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#union AppUserSchemaProperty#union}

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.unique"></a>

```go
Unique *string
```

- *Type:* *string

Whether the property should be unique. It can be set to `UNIQUE_VALIDATED` or `NOT_UNIQUE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#unique AppUserSchemaProperty#unique}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

User type ID. By default, it is `default`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#user_type AppUserSchemaProperty#user_type}

---

### AppUserSchemaPropertyOneOf <a name="AppUserSchemaPropertyOneOf" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

&appuserschemaproperty.AppUserSchemaPropertyOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#const AppUserSchemaProperty#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/resources/app_user_schema_property#title AppUserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaPropertyArrayOneOfList <a name="AppUserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.NewAppUserSchemaPropertyArrayOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppUserSchemaPropertyArrayOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get"></a>

```go
func Get(index *f64) AppUserSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppUserSchemaPropertyArrayOneOfOutputReference <a name="AppUserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.NewAppUserSchemaPropertyArrayOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppUserSchemaPropertyArrayOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppUserSchemaPropertyOneOfList <a name="AppUserSchemaPropertyOneOfList" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.NewAppUserSchemaPropertyOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppUserSchemaPropertyOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get"></a>

```go
func Get(index *f64) AppUserSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppUserSchemaPropertyOneOfOutputReference <a name="AppUserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/appuserschemaproperty"

appuserschemaproperty.NewAppUserSchemaPropertyOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppUserSchemaPropertyOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchemaProperty.AppUserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



