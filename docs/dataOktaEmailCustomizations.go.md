# `data_okta_email_customizations`

Refer to the Terraform Registory for docs: [`data_okta_email_customizations`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations).

# `dataOktaEmailCustomizations` Submodule <a name="`dataOktaEmailCustomizations` Submodule" id="@cdktf/provider-okta.dataOktaEmailCustomizations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaEmailCustomizations <a name="DataOktaEmailCustomizations" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations okta_email_customizations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

dataoktaemailcustomizations.NewDataOktaEmailCustomizations(scope Construct, id *string, config DataOktaEmailCustomizationsConfig) DataOktaEmailCustomizations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig">DataOktaEmailCustomizationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig">DataOktaEmailCustomizationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

dataoktaemailcustomizations.DataOktaEmailCustomizations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

dataoktaemailcustomizations.DataOktaEmailCustomizations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

dataoktaemailcustomizations.DataOktaEmailCustomizations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.emailCustomizations">EmailCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList">DataOktaEmailCustomizationsEmailCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandIdInput">BrandIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandId">BrandId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EmailCustomizations`<sup>Required</sup> <a name="EmailCustomizations" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.emailCustomizations"></a>

```go
func EmailCustomizations() DataOktaEmailCustomizationsEmailCustomizationsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList">DataOktaEmailCustomizationsEmailCustomizationsList</a>

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandIdInput"></a>

```go
func BrandIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandId"></a>

```go
func BrandId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaEmailCustomizationsConfig <a name="DataOktaEmailCustomizationsConfig" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

&dataoktaemailcustomizations.DataOktaEmailCustomizationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BrandId: *string,
	TemplateName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.brandId">BrandId</a></code> | <code>*string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.templateName">TemplateName</a></code> | <code>*string</code> | Template Name. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#id DataOktaEmailCustomizations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.brandId"></a>

```go
BrandId *string
```

- *Type:* *string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#brand_id DataOktaEmailCustomizations#brand_id}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

Template Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#template_name DataOktaEmailCustomizations#template_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#id DataOktaEmailCustomizations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaEmailCustomizationsEmailCustomizations <a name="DataOktaEmailCustomizationsEmailCustomizations" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

&dataoktaemailcustomizations.DataOktaEmailCustomizationsEmailCustomizations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaEmailCustomizationsEmailCustomizationsList <a name="DataOktaEmailCustomizationsEmailCustomizationsList" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

dataoktaemailcustomizations.NewDataOktaEmailCustomizationsEmailCustomizationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOktaEmailCustomizationsEmailCustomizationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.get"></a>

```go
func Get(index *f64) DataOktaEmailCustomizationsEmailCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOktaEmailCustomizationsEmailCustomizationsOutputReference <a name="DataOktaEmailCustomizationsEmailCustomizationsOutputReference" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v12/dataoktaemailcustomizations"

dataoktaemailcustomizations.NewDataOktaEmailCustomizationsEmailCustomizationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOktaEmailCustomizationsEmailCustomizationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.links">Links</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations">DataOktaEmailCustomizationsEmailCustomizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.links"></a>

```go
func Links() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOktaEmailCustomizationsEmailCustomizations
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations">DataOktaEmailCustomizationsEmailCustomizations</a>

---



