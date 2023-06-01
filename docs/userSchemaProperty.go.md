# `okta_user_schema_property`

Refer to the Terraform Registory for docs: [`okta_user_schema_property`](https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property).

# `userSchemaProperty` Submodule <a name="`userSchemaProperty` Submodule" id="@cdktf/provider-okta.userSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserSchemaProperty <a name="UserSchemaProperty" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property okta_user_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaProperty(scope Construct, id *string, config UserSchemaPropertyConfig) UserSchemaProperty
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig">UserSchemaPropertyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig">UserSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority">PutMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority">ResetMasterOverridePriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique">ResetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf"></a>

```go
func PutArrayOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putArrayOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMasterOverridePriority` <a name="PutMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority"></a>

```go
func PutMasterOverridePriority(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putMasterOverridePriority.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf"></a>

```go
func PutOneOf(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.putOneOf.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayEnum"></a>

```go
func ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayOneOf"></a>

```go
func ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetArrayType"></a>

```go
func ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalName"></a>

```go
func ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetExternalNamespace"></a>

```go
func ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetId"></a>

```go
func ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaster"></a>

```go
func ResetMaster()
```

##### `ResetMasterOverridePriority` <a name="ResetMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMasterOverridePriority"></a>

```go
func ResetMasterOverridePriority()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetMinLength"></a>

```go
func ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetOneOf"></a>

```go
func ResetOneOf()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPattern"></a>

```go
func ResetPattern()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetPermissions"></a>

```go
func ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetScope"></a>

```go
func ResetScope()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUnique"></a>

```go
func ResetUnique()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.resetUserType"></a>

```go
func ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.UserSchemaProperty_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.UserSchemaProperty_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.UserSchemaProperty_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority">MasterOverridePriority</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput">EnumInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput">ExternalNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput">IndexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput">MasterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput">MasterOverridePriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput">OneOfInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput">PermissionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput">UniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput">UserTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType">ArrayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum">Enum</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName">ExternalName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index">Index</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master">Master</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions">Permissions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique">Unique</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOf"></a>

```go
func ArrayOneOf() UserSchemaPropertyArrayOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList">UserSchemaPropertyArrayOneOfList</a>

---

##### `MasterOverridePriority`<sup>Required</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriority"></a>

```go
func MasterOverridePriority() UserSchemaPropertyMasterOverridePriorityList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList">UserSchemaPropertyMasterOverridePriorityList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOf"></a>

```go
func OneOf() UserSchemaPropertyOneOfList
```

- *Type:* <a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList">UserSchemaPropertyOneOfList</a>

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnumInput"></a>

```go
func ArrayEnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayOneOfInput"></a>

```go
func ArrayOneOfInput() interface{}
```

- *Type:* interface{}

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayTypeInput"></a>

```go
func ArrayTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enumInput"></a>

```go
func EnumInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNameInput"></a>

```go
func ExternalNameInput() *string
```

- *Type:* *string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespaceInput"></a>

```go
func ExternalNamespaceInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.indexInput"></a>

```go
func IndexInput() *string
```

- *Type:* *string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterInput"></a>

```go
func MasterInput() *string
```

- *Type:* *string

---

##### `MasterOverridePriorityInput`<sup>Optional</sup> <a name="MasterOverridePriorityInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.masterOverridePriorityInput"></a>

```go
func MasterOverridePriorityInput() interface{}
```

- *Type:* interface{}

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.oneOfInput"></a>

```go
func OneOfInput() interface{}
```

- *Type:* interface{}

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissionsInput"></a>

```go
func PermissionsInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.uniqueInput"></a>

```go
func UniqueInput() *string
```

- *Type:* *string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userTypeInput"></a>

```go
func UserTypeInput() *string
```

- *Type:* *string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayEnum"></a>

```go
func ArrayEnum() *[]*string
```

- *Type:* *[]*string

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.arrayType"></a>

```go
func ArrayType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.enum"></a>

```go
func Enum() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalName"></a>

```go
func ExternalName() *string
```

- *Type:* *string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.externalNamespace"></a>

```go
func ExternalNamespace() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.index"></a>

```go
func Index() *string
```

- *Type:* *string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.master"></a>

```go
func Master() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.permissions"></a>

```go
func Permissions() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.unique"></a>

```go
func Unique() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaProperty.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### UserSchemaPropertyArrayOneOf <a name="UserSchemaPropertyArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

&userschemaproperty.UserSchemaPropertyArrayOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

### UserSchemaPropertyConfig <a name="UserSchemaPropertyConfig" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

&userschemaproperty.UserSchemaPropertyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
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
	MasterOverridePriority: interface{},
	MaxLength: *f64,
	MinLength: *f64,
	OneOf: interface{},
	Pattern: *string,
	Permissions: *string,
	Required: interface{},
	Scope: *string,
	Unique: *string,
	UserType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index">Index</a></code> | <code>*string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title">Title</a></code> | <code>*string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type">Type</a></code> | <code>*string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum">ArrayEnum</a></code> | <code>*[]*string</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>interface{}</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType">ArrayType</a></code> | <code>*string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description">Description</a></code> | <code>*string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum">Enum</a></code> | <code>*[]*string</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName">ExternalName</a></code> | <code>*string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>*string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#id UserSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master">Master</a></code> | <code>*string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority">MasterOverridePriority</a></code> | <code>interface{}</code> | master_override_priority block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength">MinLength</a></code> | <code>*f64</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf">OneOf</a></code> | <code>interface{}</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern">Pattern</a></code> | <code>*string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions">Permissions</a></code> | <code>*string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required">Required</a></code> | <code>interface{}</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#scope UserSchemaProperty#scope}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique">Unique</a></code> | <code>*string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType">UserType</a></code> | <code>*string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.index"></a>

```go
Index *string
```

- *Type:* *string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#index UserSchemaProperty#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Subschema title (display name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#type UserSchemaProperty#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayEnum"></a>

```go
ArrayEnum *[]*string
```

- *Type:* *[]*string

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#array_enum UserSchemaProperty#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayOneOf"></a>

```go
ArrayOneOf interface{}
```

- *Type:* interface{}

array_one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#array_one_of UserSchemaProperty#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.arrayType"></a>

```go
ArrayType *string
```

- *Type:* *string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#array_type UserSchemaProperty#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Custom Subschema description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#description UserSchemaProperty#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.enum"></a>

```go
Enum *[]*string
```

- *Type:* *[]*string

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#enum UserSchemaProperty#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalName"></a>

```go
ExternalName *string
```

- *Type:* *string

Subschema external name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#external_name UserSchemaProperty#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.externalNamespace"></a>

```go
ExternalNamespace *string
```

- *Type:* *string

Subschema external namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#external_namespace UserSchemaProperty#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#id UserSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.master"></a>

```go
Master *string
```

- *Type:* *string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#master UserSchemaProperty#master}

---

##### `MasterOverridePriority`<sup>Optional</sup> <a name="MasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.masterOverridePriority"></a>

```go
MasterOverridePriority interface{}
```

- *Type:* interface{}

master_override_priority block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#master_override_priority UserSchemaProperty#master_override_priority}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#max_length UserSchemaProperty#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#min_length UserSchemaProperty#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.oneOf"></a>

```go
OneOf interface{}
```

- *Type:* interface{}

one_of block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#one_of UserSchemaProperty#one_of}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#pattern UserSchemaProperty#pattern}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.permissions"></a>

```go
Permissions *string
```

- *Type:* *string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#permissions UserSchemaProperty#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

Whether the subschema is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#required UserSchemaProperty#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#scope UserSchemaProperty#scope}.

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.unique"></a>

```go
Unique *string
```

- *Type:* *string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#unique UserSchemaProperty#unique}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyConfig.property.userType"></a>

```go
UserType *string
```

- *Type:* *string

Custom subschema user type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#user_type UserSchemaProperty#user_type}

---

### UserSchemaPropertyMasterOverridePriority <a name="UserSchemaPropertyMasterOverridePriority" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

&userschemaproperty.UserSchemaPropertyMasterOverridePriority {
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#value UserSchemaProperty#value}. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#type UserSchemaProperty#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#value UserSchemaProperty#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriority.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#type UserSchemaProperty#type}.

---

### UserSchemaPropertyOneOf <a name="UserSchemaPropertyOneOf" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

&userschemaproperty.UserSchemaPropertyOneOf {
	Const: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const">Const</a></code> | <code>*string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title">Title</a></code> | <code>*string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.const"></a>

```go
Const *string
```

- *Type:* *string

Enum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#const UserSchemaProperty#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOf.property.title"></a>

```go
Title *string
```

- *Type:* *string

Enum title.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/user_schema_property#title UserSchemaProperty#title}

---

## Classes <a name="Classes" id="Classes"></a>

### UserSchemaPropertyArrayOneOfList <a name="UserSchemaPropertyArrayOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaPropertyArrayOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserSchemaPropertyArrayOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get"></a>

```go
func Get(index *f64) UserSchemaPropertyArrayOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaPropertyArrayOneOfOutputReference <a name="UserSchemaPropertyArrayOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaPropertyArrayOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserSchemaPropertyArrayOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyArrayOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaPropertyMasterOverridePriorityList <a name="UserSchemaPropertyMasterOverridePriorityList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaPropertyMasterOverridePriorityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserSchemaPropertyMasterOverridePriorityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get"></a>

```go
func Get(index *f64) UserSchemaPropertyMasterOverridePriorityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaPropertyMasterOverridePriorityOutputReference <a name="UserSchemaPropertyMasterOverridePriorityOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaPropertyMasterOverridePriorityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserSchemaPropertyMasterOverridePriorityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyMasterOverridePriorityOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaPropertyOneOfList <a name="UserSchemaPropertyOneOfList" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaPropertyOneOfList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) UserSchemaPropertyOneOfList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get"></a>

```go
func Get(index *f64) UserSchemaPropertyOneOfOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### UserSchemaPropertyOneOfOutputReference <a name="UserSchemaPropertyOneOfOutputReference" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/userschemaproperty"

userschemaproperty.NewUserSchemaPropertyOneOfOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) UserSchemaPropertyOneOfOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const">Const</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.constInput"></a>

```go
func ConstInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.const"></a>

```go
func Const() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.userSchemaProperty.UserSchemaPropertyOneOfOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



