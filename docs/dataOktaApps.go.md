# `dataOktaApps` Submodule <a name="`dataOktaApps` Submodule" id="@cdktf/provider-okta.dataOktaApps"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaApps <a name="DataOktaApps" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps okta_apps}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.NewDataOktaApps(scope Construct, id *string, config DataOktaAppsConfig) DataOktaApps
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig">DataOktaAppsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig">DataOktaAppsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetActiveOnly">ResetActiveOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetIncludeNonDeleted">ResetIncludeNonDeleted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabelPrefix">ResetLabelPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetQ">ResetQ</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetUseOptimization">ResetUseOptimization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetActiveOnly` <a name="ResetActiveOnly" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetActiveOnly"></a>

```go
func ResetActiveOnly()
```

##### `ResetIncludeNonDeleted` <a name="ResetIncludeNonDeleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetIncludeNonDeleted"></a>

```go
func ResetIncludeNonDeleted()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetLabelPrefix` <a name="ResetLabelPrefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetLabelPrefix"></a>

```go
func ResetLabelPrefix()
```

##### `ResetQ` <a name="ResetQ" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetQ"></a>

```go
func ResetQ()
```

##### `ResetUseOptimization` <a name="ResetUseOptimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.resetUseOptimization"></a>

```go
func ResetUseOptimization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaApps resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.DataOktaApps_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.DataOktaApps_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.DataOktaApps_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.DataOktaApps_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOktaApps resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOktaApps to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOktaApps that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaApps to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.apps">Apps</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList">DataOktaAppsAppsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnlyInput">ActiveOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeletedInput">IncludeNonDeletedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefixInput">LabelPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.qInput">QInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimizationInput">UseOptimizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnly">ActiveOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeleted">IncludeNonDeleted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefix">LabelPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.q">Q</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimization">UseOptimization</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Apps`<sup>Required</sup> <a name="Apps" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.apps"></a>

```go
func Apps() DataOktaAppsAppsList
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList">DataOktaAppsAppsList</a>

---

##### `ActiveOnlyInput`<sup>Optional</sup> <a name="ActiveOnlyInput" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnlyInput"></a>

```go
func ActiveOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeNonDeletedInput`<sup>Optional</sup> <a name="IncludeNonDeletedInput" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeletedInput"></a>

```go
func IncludeNonDeletedInput() interface{}
```

- *Type:* interface{}

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `LabelPrefixInput`<sup>Optional</sup> <a name="LabelPrefixInput" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefixInput"></a>

```go
func LabelPrefixInput() *string
```

- *Type:* *string

---

##### `QInput`<sup>Optional</sup> <a name="QInput" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.qInput"></a>

```go
func QInput() *string
```

- *Type:* *string

---

##### `UseOptimizationInput`<sup>Optional</sup> <a name="UseOptimizationInput" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimizationInput"></a>

```go
func UseOptimizationInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveOnly`<sup>Required</sup> <a name="ActiveOnly" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.activeOnly"></a>

```go
func ActiveOnly() interface{}
```

- *Type:* interface{}

---

##### `IncludeNonDeleted`<sup>Required</sup> <a name="IncludeNonDeleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.includeNonDeleted"></a>

```go
func IncludeNonDeleted() interface{}
```

- *Type:* interface{}

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `LabelPrefix`<sup>Required</sup> <a name="LabelPrefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.labelPrefix"></a>

```go
func LabelPrefix() *string
```

- *Type:* *string

---

##### `Q`<sup>Required</sup> <a name="Q" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.q"></a>

```go
func Q() *string
```

- *Type:* *string

---

##### `UseOptimization`<sup>Required</sup> <a name="UseOptimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.useOptimization"></a>

```go
func UseOptimization() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaApps.DataOktaApps.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppsApps <a name="DataOktaAppsApps" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

&dataoktaapps.DataOktaAppsApps {

}
```


### DataOktaAppsAppsVisibility <a name="DataOktaAppsAppsVisibility" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

&dataoktaapps.DataOktaAppsAppsVisibility {

}
```


### DataOktaAppsAppsVisibilityHide <a name="DataOktaAppsAppsVisibilityHide" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

&dataoktaapps.DataOktaAppsAppsVisibilityHide {

}
```


### DataOktaAppsConfig <a name="DataOktaAppsConfig" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

&dataoktaapps.DataOktaAppsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ActiveOnly: interface{},
	IncludeNonDeleted: interface{},
	Label: *string,
	LabelPrefix: *string,
	Q: *string,
	UseOptimization: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.activeOnly">ActiveOnly</a></code> | <code>interface{}</code> | Search only active applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.includeNonDeleted">IncludeNonDeleted</a></code> | <code>interface{}</code> | Specifies whether to include non-active, but not deleted apps in the results. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.label">Label</a></code> | <code>*string</code> | Searches for applications whose label or name property matches this value exactly. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.labelPrefix">LabelPrefix</a></code> | <code>*string</code> | Searches for applications whose label or name property begins with this value. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.q">Q</a></code> | <code>*string</code> | Searches for applications whose name or label properties that starts with this value. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.useOptimization">UseOptimization</a></code> | <code>interface{}</code> | Specifies whether to use query optimization. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveOnly`<sup>Optional</sup> <a name="ActiveOnly" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.activeOnly"></a>

```go
ActiveOnly interface{}
```

- *Type:* interface{}

Search only active applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#active_only DataOktaApps#active_only}

---

##### `IncludeNonDeleted`<sup>Optional</sup> <a name="IncludeNonDeleted" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.includeNonDeleted"></a>

```go
IncludeNonDeleted interface{}
```

- *Type:* interface{}

Specifies whether to include non-active, but not deleted apps in the results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#include_non_deleted DataOktaApps#include_non_deleted}

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Searches for applications whose label or name property matches this value exactly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#label DataOktaApps#label}

---

##### `LabelPrefix`<sup>Optional</sup> <a name="LabelPrefix" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.labelPrefix"></a>

```go
LabelPrefix *string
```

- *Type:* *string

Searches for applications whose label or name property begins with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#label_prefix DataOktaApps#label_prefix}

---

##### `Q`<sup>Optional</sup> <a name="Q" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.q"></a>

```go
Q *string
```

- *Type:* *string

Searches for applications whose name or label properties that starts with this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#q DataOktaApps#q}

---

##### `UseOptimization`<sup>Optional</sup> <a name="UseOptimization" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsConfig.property.useOptimization"></a>

```go
UseOptimization interface{}
```

- *Type:* interface{}

Specifies whether to use query optimization.

If you specify `useOptimization=true` in the request query, the response contains a subset of app instance properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.18.0/docs/data-sources/apps#use_optimization DataOktaApps#use_optimization}

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaAppsAppsList <a name="DataOktaAppsAppsList" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.NewDataOktaAppsAppsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOktaAppsAppsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.get"></a>

```go
func Get(index *f64) DataOktaAppsAppsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOktaAppsAppsOutputReference <a name="DataOktaAppsAppsOutputReference" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.NewDataOktaAppsAppsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOktaAppsAppsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.adminNote">AdminNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.enduserNote">EnduserNote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.features">Features</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.signOnMode">SignOnMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.visibility">Visibility</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference">DataOktaAppsAppsVisibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps">DataOktaAppsApps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminNote`<sup>Required</sup> <a name="AdminNote" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.adminNote"></a>

```go
func AdminNote() *string
```

- *Type:* *string

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `EnduserNote`<sup>Required</sup> <a name="EnduserNote" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.enduserNote"></a>

```go
func EnduserNote() *string
```

- *Type:* *string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.features"></a>

```go
func Features() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.lastUpdated"></a>

```go
func LastUpdated() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignOnMode`<sup>Required</sup> <a name="SignOnMode" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.signOnMode"></a>

```go
func SignOnMode() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.visibility"></a>

```go
func Visibility() DataOktaAppsAppsVisibilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference">DataOktaAppsAppsVisibilityOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOktaAppsApps
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsApps">DataOktaAppsApps</a>

---


### DataOktaAppsAppsVisibilityHideOutputReference <a name="DataOktaAppsAppsVisibilityHideOutputReference" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.NewDataOktaAppsAppsVisibilityHideOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataOktaAppsAppsVisibilityHideOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.ios">Ios</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.web">Web</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide">DataOktaAppsAppsVisibilityHide</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.ios"></a>

```go
func Ios() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.web"></a>

```go
func Web() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOktaAppsAppsVisibilityHide
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHide">DataOktaAppsAppsVisibilityHide</a>

---


### DataOktaAppsAppsVisibilityOutputReference <a name="DataOktaAppsAppsVisibilityOutputReference" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v13/dataoktaapps"

dataoktaapps.NewDataOktaAppsAppsVisibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataOktaAppsAppsVisibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoLaunch">AutoLaunch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.hide">Hide</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference">DataOktaAppsAppsVisibilityHideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility">DataOktaAppsAppsVisibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoLaunch`<sup>Required</sup> <a name="AutoLaunch" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoLaunch"></a>

```go
func AutoLaunch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.autoSubmitToolbar"></a>

```go
func AutoSubmitToolbar() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Hide`<sup>Required</sup> <a name="Hide" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.hide"></a>

```go
func Hide() DataOktaAppsAppsVisibilityHideOutputReference
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityHideOutputReference">DataOktaAppsAppsVisibilityHideOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOktaAppsAppsVisibility
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaApps.DataOktaAppsAppsVisibility">DataOktaAppsAppsVisibility</a>

---



