# `captchaOrgWideSettings` Submodule <a name="`captchaOrgWideSettings` Submodule" id="@cdktf/provider-okta.captchaOrgWideSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CaptchaOrgWideSettings <a name="CaptchaOrgWideSettings" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/captcha_org_wide_settings okta_captcha_org_wide_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/captchaorgwidesettings"

captchaorgwidesettings.NewCaptchaOrgWideSettings(scope Construct, id *string, config CaptchaOrgWideSettingsConfig) CaptchaOrgWideSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig">CaptchaOrgWideSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig">CaptchaOrgWideSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId">ResetCaptchaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor">ResetEnabledFor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCaptchaId` <a name="ResetCaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetCaptchaId"></a>

```go
func ResetCaptchaId()
```

##### `ResetEnabledFor` <a name="ResetEnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetEnabledFor"></a>

```go
func ResetEnabledFor()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/captchaorgwidesettings"

captchaorgwidesettings.CaptchaOrgWideSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/captchaorgwidesettings"

captchaorgwidesettings.CaptchaOrgWideSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/captchaorgwidesettings"

captchaorgwidesettings.CaptchaOrgWideSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput">CaptchaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput">EnabledForInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId">CaptchaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor">EnabledFor</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaptchaIdInput`<sup>Optional</sup> <a name="CaptchaIdInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaIdInput"></a>

```go
func CaptchaIdInput() *string
```

- *Type:* *string

---

##### `EnabledForInput`<sup>Optional</sup> <a name="EnabledForInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledForInput"></a>

```go
func EnabledForInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CaptchaId`<sup>Required</sup> <a name="CaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.captchaId"></a>

```go
func CaptchaId() *string
```

- *Type:* *string

---

##### `EnabledFor`<sup>Required</sup> <a name="EnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.enabledFor"></a>

```go
func EnabledFor() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CaptchaOrgWideSettingsConfig <a name="CaptchaOrgWideSettingsConfig" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/captchaorgwidesettings"

&captchaorgwidesettings.CaptchaOrgWideSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CaptchaId: *string,
	EnabledFor: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId">CaptchaId</a></code> | <code>*string</code> | ID of the CAPTCHA. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor">EnabledFor</a></code> | <code>*[]*string</code> | Set of pages that have CAPTCHA enabled. |
| <code><a href="#@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaptchaId`<sup>Optional</sup> <a name="CaptchaId" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.captchaId"></a>

```go
CaptchaId *string
```

- *Type:* *string

ID of the CAPTCHA.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha_org_wide_settings#captcha_id CaptchaOrgWideSettings#captcha_id}

---

##### `EnabledFor`<sup>Optional</sup> <a name="EnabledFor" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.enabledFor"></a>

```go
EnabledFor *[]*string
```

- *Type:* *[]*string

Set of pages that have CAPTCHA enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha_org_wide_settings#enabled_for CaptchaOrgWideSettings#enabled_for}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.captchaOrgWideSettings.CaptchaOrgWideSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/captcha_org_wide_settings#id CaptchaOrgWideSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---


