# `data_okta_everyone_group`

Refer to the Terraform Registory for docs: [`data_okta_everyone_group`](https://www.terraform.io/docs/providers/okta/d/everyone_group).

# `dataOktaEveryoneGroup` Submodule <a name="`dataOktaEveryoneGroup` Submodule" id="@cdktf/provider-okta.dataOktaEveryoneGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaEveryoneGroup <a name="DataOktaEveryoneGroup" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/d/everyone_group okta_everyone_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/dataoktaeveryonegroup"

dataoktaeveryonegroup.NewDataOktaEveryoneGroup(scope Construct, id *string, config DataOktaEveryoneGroupConfig) DataOktaEveryoneGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig">DataOktaEveryoneGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig">DataOktaEveryoneGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetIncludeUsers">ResetIncludeUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludeUsers` <a name="ResetIncludeUsers" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.resetIncludeUsers"></a>

```go
func ResetIncludeUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/dataoktaeveryonegroup"

dataoktaeveryonegroup.DataOktaEveryoneGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/dataoktaeveryonegroup"

dataoktaeveryonegroup.DataOktaEveryoneGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/dataoktaeveryonegroup"

dataoktaeveryonegroup.DataOktaEveryoneGroup_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsersInput">IncludeUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsers">IncludeUsers</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludeUsersInput`<sup>Optional</sup> <a name="IncludeUsersInput" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsersInput"></a>

```go
func IncludeUsersInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludeUsers`<sup>Required</sup> <a name="IncludeUsers" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.includeUsers"></a>

```go
func IncludeUsers() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaEveryoneGroupConfig <a name="DataOktaEveryoneGroupConfig" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/dataoktaeveryonegroup"

&dataoktaeveryonegroup.DataOktaEveryoneGroupConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	IncludeUsers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.includeUsers">IncludeUsers</a></code> | <code>interface{}</code> | Fetch group users, having default off cuts down on API calls. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#id DataOktaEveryoneGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludeUsers`<sup>Optional</sup> <a name="IncludeUsers" id="@cdktf/provider-okta.dataOktaEveryoneGroup.DataOktaEveryoneGroupConfig.property.includeUsers"></a>

```go
IncludeUsers interface{}
```

- *Type:* interface{}

Fetch group users, having default off cuts down on API calls.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/everyone_group#include_users DataOktaEveryoneGroup#include_users}

---



