# `data_okta_trusted_origins`

Refer to the Terraform Registory for docs: [`data_okta_trusted_origins`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/trusted_origins).

# `dataOktaTrustedOrigins` Submodule <a name="`dataOktaTrustedOrigins` Submodule" id="@cdktf/provider-okta.dataOktaTrustedOrigins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaTrustedOrigins <a name="DataOktaTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/trusted_origins okta_trusted_origins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

dataoktatrustedorigins.NewDataOktaTrustedOrigins(scope Construct, id *string, config DataOktaTrustedOriginsConfig) DataOktaTrustedOrigins
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig">DataOktaTrustedOriginsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig">DataOktaTrustedOriginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

dataoktatrustedorigins.DataOktaTrustedOrigins_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

dataoktatrustedorigins.DataOktaTrustedOrigins_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

dataoktatrustedorigins.DataOktaTrustedOrigins_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins">TrustedOrigins</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `TrustedOrigins`<sup>Required</sup> <a name="TrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins"></a>

```go
func TrustedOrigins() DataOktaTrustedOriginsTrustedOriginsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaTrustedOriginsConfig <a name="DataOktaTrustedOriginsConfig" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

&dataoktatrustedorigins.DataOktaTrustedOriginsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter">Filter</a></code> | <code>*string</code> | Filter criteria. Filter value will be URL-encoded by the provider. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Filter criteria. Filter value will be URL-encoded by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/trusted_origins#filter DataOktaTrustedOrigins#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaTrustedOriginsTrustedOrigins <a name="DataOktaTrustedOriginsTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

&dataoktatrustedorigins.DataOktaTrustedOriginsTrustedOrigins {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaTrustedOriginsTrustedOriginsList <a name="DataOktaTrustedOriginsTrustedOriginsList" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

dataoktatrustedorigins.NewDataOktaTrustedOriginsTrustedOriginsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOktaTrustedOriginsTrustedOriginsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get"></a>

```go
func Get(index *f64) DataOktaTrustedOriginsTrustedOriginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOktaTrustedOriginsTrustedOriginsOutputReference <a name="DataOktaTrustedOriginsTrustedOriginsOutputReference" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktatrustedorigins"

dataoktatrustedorigins.NewDataOktaTrustedOriginsTrustedOriginsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOktaTrustedOriginsTrustedOriginsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active">Active</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin">Origin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active"></a>

```go
func Active() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin"></a>

```go
func Origin() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOktaTrustedOriginsTrustedOrigins
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a>

---



