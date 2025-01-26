# `dataOktaUser` Submodule <a name="`dataOktaUser` Submodule" id="@cdktf/provider-okta.dataOktaUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaUser <a name="DataOktaUser" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user okta_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.NewDataOktaUser(scope Construct, id *string, config DataOktaUserConfig) DataOktaUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig">DataOktaUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig">DataOktaUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch">PutSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator">ResetCompoundSearchOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds">ResetDelayReadSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch">ResetSearch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles">ResetSkipRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutSearch` <a name="PutSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch"></a>

```go
func PutSearch(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.putSearch.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompoundSearchOperator` <a name="ResetCompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetCompoundSearchOperator"></a>

```go
func ResetCompoundSearchOperator()
```

##### `ResetDelayReadSeconds` <a name="ResetDelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetDelayReadSeconds"></a>

```go
func ResetDelayReadSeconds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetId"></a>

```go
func ResetId()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSearch"></a>

```go
func ResetSearch()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipGroups"></a>

```go
func ResetSkipGroups()
```

##### `ResetSkipRoles` <a name="ResetSkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetSkipRoles"></a>

```go
func ResetSkipRoles()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.DataOktaUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.DataOktaUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.DataOktaUser_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.DataOktaUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOktaUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOktaUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOktaUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles">AdminRoles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter">CostCenter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes">CustomProfileAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department">Department</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division">Division</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber">EmployeeNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships">GroupMemberships</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix">HonorificPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix">HonorificSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login">Login</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager">Manager</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId">ManagerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone">MobilePhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName">NickName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress">PostalAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage">PreferredLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone">PrimaryPhone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl">ProfileUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search">Search</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail">SecondEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress">StreetAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType">UserType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode">ZipCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput">CompoundSearchOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput">DelayReadSecondsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput">SearchInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput">SkipRolesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator">CompoundSearchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds">DelayReadSeconds</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles">SkipRoles</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdminRoles`<sup>Required</sup> <a name="AdminRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.adminRoles"></a>

```go
func AdminRoles() *[]*string
```

- *Type:* *[]*string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `CostCenter`<sup>Required</sup> <a name="CostCenter" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.costCenter"></a>

```go
func CostCenter() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `CustomProfileAttributes`<sup>Required</sup> <a name="CustomProfileAttributes" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.customProfileAttributes"></a>

```go
func CustomProfileAttributes() *string
```

- *Type:* *string

---

##### `Department`<sup>Required</sup> <a name="Department" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.department"></a>

```go
func Department() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Division`<sup>Required</sup> <a name="Division" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.division"></a>

```go
func Division() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `EmployeeNumber`<sup>Required</sup> <a name="EmployeeNumber" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.employeeNumber"></a>

```go
func EmployeeNumber() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `GroupMemberships`<sup>Required</sup> <a name="GroupMemberships" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.groupMemberships"></a>

```go
func GroupMemberships() *[]*string
```

- *Type:* *[]*string

---

##### `HonorificPrefix`<sup>Required</sup> <a name="HonorificPrefix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificPrefix"></a>

```go
func HonorificPrefix() *string
```

- *Type:* *string

---

##### `HonorificSuffix`<sup>Required</sup> <a name="HonorificSuffix" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.honorificSuffix"></a>

```go
func HonorificSuffix() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `Login`<sup>Required</sup> <a name="Login" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.login"></a>

```go
func Login() *string
```

- *Type:* *string

---

##### `Manager`<sup>Required</sup> <a name="Manager" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.manager"></a>

```go
func Manager() *string
```

- *Type:* *string

---

##### `ManagerId`<sup>Required</sup> <a name="ManagerId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.managerId"></a>

```go
func ManagerId() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MobilePhone`<sup>Required</sup> <a name="MobilePhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.mobilePhone"></a>

```go
func MobilePhone() *string
```

- *Type:* *string

---

##### `NickName`<sup>Required</sup> <a name="NickName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.nickName"></a>

```go
func NickName() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.postalAddress"></a>

```go
func PostalAddress() *string
```

- *Type:* *string

---

##### `PreferredLanguage`<sup>Required</sup> <a name="PreferredLanguage" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.preferredLanguage"></a>

```go
func PreferredLanguage() *string
```

- *Type:* *string

---

##### `PrimaryPhone`<sup>Required</sup> <a name="PrimaryPhone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.primaryPhone"></a>

```go
func PrimaryPhone() *string
```

- *Type:* *string

---

##### `ProfileUrl`<sup>Required</sup> <a name="ProfileUrl" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.profileUrl"></a>

```go
func ProfileUrl() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.search"></a>

```go
func Search() DataOktaUserSearchList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList">DataOktaUserSearchList</a>

---

##### `SecondEmail`<sup>Required</sup> <a name="SecondEmail" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.secondEmail"></a>

```go
func SecondEmail() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StreetAddress`<sup>Required</sup> <a name="StreetAddress" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.streetAddress"></a>

```go
func StreetAddress() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userType"></a>

```go
func UserType() *string
```

- *Type:* *string

---

##### `ZipCode`<sup>Required</sup> <a name="ZipCode" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.zipCode"></a>

```go
func ZipCode() *string
```

- *Type:* *string

---

##### `CompoundSearchOperatorInput`<sup>Optional</sup> <a name="CompoundSearchOperatorInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperatorInput"></a>

```go
func CompoundSearchOperatorInput() *string
```

- *Type:* *string

---

##### `DelayReadSecondsInput`<sup>Optional</sup> <a name="DelayReadSecondsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSecondsInput"></a>

```go
func DelayReadSecondsInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.searchInput"></a>

```go
func SearchInput() interface{}
```

- *Type:* interface{}

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroupsInput"></a>

```go
func SkipGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `SkipRolesInput`<sup>Optional</sup> <a name="SkipRolesInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRolesInput"></a>

```go
func SkipRolesInput() interface{}
```

- *Type:* interface{}

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `CompoundSearchOperator`<sup>Required</sup> <a name="CompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.compoundSearchOperator"></a>

```go
func CompoundSearchOperator() *string
```

- *Type:* *string

---

##### `DelayReadSeconds`<sup>Required</sup> <a name="DelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.delayReadSeconds"></a>

```go
func DelayReadSeconds() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipGroups"></a>

```go
func SkipGroups() interface{}
```

- *Type:* interface{}

---

##### `SkipRoles`<sup>Required</sup> <a name="SkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.skipRoles"></a>

```go
func SkipRoles() interface{}
```

- *Type:* interface{}

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaUser.DataOktaUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaUserConfig <a name="DataOktaUserConfig" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

&dataoktauser.DataOktaUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompoundSearchOperator: *string,
	DelayReadSeconds: *string,
	Id: *string,
	Search: interface{},
	SkipGroups: interface{},
	SkipRoles: interface{},
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator">CompoundSearchOperator</a></code> | <code>*string</code> | Search operator used when joining multiple search clauses. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds">DelayReadSeconds</a></code> | <code>*string</code> | Force delay of the user read by N seconds. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#id DataOktaUser#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search">Search</a></code> | <code>interface{}</code> | search block. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups">SkipGroups</a></code> | <code>interface{}</code> | Do not populate user groups information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles">SkipRoles</a></code> | <code>interface{}</code> | Do not populate user roles information (prevents additional API call). |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId">UserId</a></code> | <code>*string</code> | Retrieve a single user based on their id. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompoundSearchOperator`<sup>Optional</sup> <a name="CompoundSearchOperator" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.compoundSearchOperator"></a>

```go
CompoundSearchOperator *string
```

- *Type:* *string

Search operator used when joining multiple search clauses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#compound_search_operator DataOktaUser#compound_search_operator}

---

##### `DelayReadSeconds`<sup>Optional</sup> <a name="DelayReadSeconds" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.delayReadSeconds"></a>

```go
DelayReadSeconds *string
```

- *Type:* *string

Force delay of the user read by N seconds.

Useful when eventual consistency of user information needs to be allowed for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#delay_read_seconds DataOktaUser#delay_read_seconds}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#id DataOktaUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.search"></a>

```go
Search interface{}
```

- *Type:* interface{}

search block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#search DataOktaUser#search}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipGroups"></a>

```go
SkipGroups interface{}
```

- *Type:* interface{}

Do not populate user groups information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#skip_groups DataOktaUser#skip_groups}

---

##### `SkipRoles`<sup>Optional</sup> <a name="SkipRoles" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.skipRoles"></a>

```go
SkipRoles interface{}
```

- *Type:* interface{}

Do not populate user roles information (prevents additional API call).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#skip_roles DataOktaUser#skip_roles}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserConfig.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Retrieve a single user based on their id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#user_id DataOktaUser#user_id}

---

### DataOktaUserSearch <a name="DataOktaUserSearch" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

&dataoktauser.DataOktaUserSearch {
	Comparison: *string,
	Expression: *string,
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison">Comparison</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#comparison DataOktaUser#comparison}. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression">Expression</a></code> | <code>*string</code> | A raw search expression string. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name">Name</a></code> | <code>*string</code> | Property name to search for. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#value DataOktaUser#value}. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.comparison"></a>

```go
Comparison *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#comparison DataOktaUser#comparison}.

---

##### `Expression`<sup>Optional</sup> <a name="Expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

A raw search expression string.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#expression DataOktaUser#expression}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.name"></a>

```go
Name *string
```

- *Type:* *string

Property name to search for.

This requires the search feature be on. Please see Okta documentation on their filter API for users. https://developer.okta.com/docs/api/resources/users#list-users-with-search

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#name DataOktaUser#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearch.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.1/docs/data-sources/user#value DataOktaUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaUserSearchList <a name="DataOktaUserSearchList" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.NewDataOktaUserSearchList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOktaUserSearchList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get"></a>

```go
func Get(index *f64) DataOktaUserSearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOktaUserSearchOutputReference <a name="DataOktaUserSearchOutputReference" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktauser"

dataoktauser.NewDataOktaUserSearchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOktaUserSearchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression">ResetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetComparison"></a>

```go
func ResetComparison()
```

##### `ResetExpression` <a name="ResetExpression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetExpression"></a>

```go
func ResetExpression()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison">Comparison</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparisonInput"></a>

```go
func ComparisonInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.comparison"></a>

```go
func Comparison() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaUser.DataOktaUserSearchOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



