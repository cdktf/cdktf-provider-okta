# `okta_authenticator`

Refer to the Terraform Registory for docs: [`okta_authenticator`](https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator).

# `authenticator` Submodule <a name="`authenticator` Submodule" id="@cdktf/provider-okta.authenticator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Authenticator <a name="Authenticator" id="@cdktf/provider-okta.authenticator.Authenticator"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator okta_authenticator}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/authenticator"

authenticator.NewAuthenticator(scope Construct, id *string, config AuthenticatorConfig) Authenticator
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig">AuthenticatorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.authenticator.Authenticator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig">AuthenticatorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort">ResetProviderAuthPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost">ResetProviderHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname">ResetProviderHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey">ResetProviderIntegrationKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson">ResetProviderJson</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey">ResetProviderSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret">ResetProviderSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate">ResetProviderUserNameTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authenticator.Authenticator.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.authenticator.Authenticator.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authenticator.Authenticator.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authenticator.Authenticator.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authenticator.Authenticator.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.authenticator.Authenticator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authenticator.Authenticator.resetId"></a>

```go
func ResetId()
```

##### `ResetProviderAuthPort` <a name="ResetProviderAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderAuthPort"></a>

```go
func ResetProviderAuthPort()
```

##### `ResetProviderHost` <a name="ResetProviderHost" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHost"></a>

```go
func ResetProviderHost()
```

##### `ResetProviderHostname` <a name="ResetProviderHostname" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderHostname"></a>

```go
func ResetProviderHostname()
```

##### `ResetProviderIntegrationKey` <a name="ResetProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderIntegrationKey"></a>

```go
func ResetProviderIntegrationKey()
```

##### `ResetProviderJson` <a name="ResetProviderJson" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderJson"></a>

```go
func ResetProviderJson()
```

##### `ResetProviderSecretKey` <a name="ResetProviderSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSecretKey"></a>

```go
func ResetProviderSecretKey()
```

##### `ResetProviderSharedSecret` <a name="ResetProviderSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderSharedSecret"></a>

```go
func ResetProviderSharedSecret()
```

##### `ResetProviderUserNameTemplate` <a name="ResetProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.resetProviderUserNameTemplate"></a>

```go
func ResetProviderUserNameTemplate()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-okta.authenticator.Authenticator.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.authenticator.Authenticator.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/authenticator"

authenticator.Authenticator_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/authenticator"

authenticator.Authenticator_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/authenticator"

authenticator.Authenticator_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.authenticator.Authenticator.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId">ProviderInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerType">ProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput">ProviderAuthPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput">ProviderHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput">ProviderHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput">ProviderIntegrationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput">ProviderJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput">ProviderSecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput">ProviderSharedSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput">ProviderUserNameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput">SettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort">ProviderAuthPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHost">ProviderHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname">ProviderHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey">ProviderIntegrationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerJson">ProviderJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey">ProviderSecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret">ProviderSharedSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate">ProviderUserNameTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authenticator.Authenticator.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authenticator.Authenticator.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authenticator.Authenticator.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authenticator.Authenticator.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authenticator.Authenticator.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authenticator.Authenticator.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authenticator.Authenticator.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authenticator.Authenticator.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authenticator.Authenticator.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authenticator.Authenticator.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authenticator.Authenticator.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authenticator.Authenticator.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProviderInstanceId`<sup>Required</sup> <a name="ProviderInstanceId" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerInstanceId"></a>

```go
func ProviderInstanceId() *string
```

- *Type:* *string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerType"></a>

```go
func ProviderType() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.authenticator.Authenticator.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProviderAuthPortInput`<sup>Optional</sup> <a name="ProviderAuthPortInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPortInput"></a>

```go
func ProviderAuthPortInput() *f64
```

- *Type:* *f64

---

##### `ProviderHostInput`<sup>Optional</sup> <a name="ProviderHostInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostInput"></a>

```go
func ProviderHostInput() *string
```

- *Type:* *string

---

##### `ProviderHostnameInput`<sup>Optional</sup> <a name="ProviderHostnameInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostnameInput"></a>

```go
func ProviderHostnameInput() *string
```

- *Type:* *string

---

##### `ProviderIntegrationKeyInput`<sup>Optional</sup> <a name="ProviderIntegrationKeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKeyInput"></a>

```go
func ProviderIntegrationKeyInput() *string
```

- *Type:* *string

---

##### `ProviderJsonInput`<sup>Optional</sup> <a name="ProviderJsonInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJsonInput"></a>

```go
func ProviderJsonInput() *string
```

- *Type:* *string

---

##### `ProviderSecretKeyInput`<sup>Optional</sup> <a name="ProviderSecretKeyInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKeyInput"></a>

```go
func ProviderSecretKeyInput() *string
```

- *Type:* *string

---

##### `ProviderSharedSecretInput`<sup>Optional</sup> <a name="ProviderSharedSecretInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecretInput"></a>

```go
func ProviderSharedSecretInput() *string
```

- *Type:* *string

---

##### `ProviderUserNameTemplateInput`<sup>Optional</sup> <a name="ProviderUserNameTemplateInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplateInput"></a>

```go
func ProviderUserNameTemplateInput() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.settingsInput"></a>

```go
func SettingsInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.authenticator.Authenticator.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.Authenticator.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-okta.authenticator.Authenticator.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authenticator.Authenticator.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProviderAuthPort`<sup>Required</sup> <a name="ProviderAuthPort" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerAuthPort"></a>

```go
func ProviderAuthPort() *f64
```

- *Type:* *f64

---

##### `ProviderHost`<sup>Required</sup> <a name="ProviderHost" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHost"></a>

```go
func ProviderHost() *string
```

- *Type:* *string

---

##### `ProviderHostname`<sup>Required</sup> <a name="ProviderHostname" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerHostname"></a>

```go
func ProviderHostname() *string
```

- *Type:* *string

---

##### `ProviderIntegrationKey`<sup>Required</sup> <a name="ProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerIntegrationKey"></a>

```go
func ProviderIntegrationKey() *string
```

- *Type:* *string

---

##### `ProviderJson`<sup>Required</sup> <a name="ProviderJson" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerJson"></a>

```go
func ProviderJson() *string
```

- *Type:* *string

---

##### `ProviderSecretKey`<sup>Required</sup> <a name="ProviderSecretKey" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSecretKey"></a>

```go
func ProviderSecretKey() *string
```

- *Type:* *string

---

##### `ProviderSharedSecret`<sup>Required</sup> <a name="ProviderSharedSecret" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerSharedSecret"></a>

```go
func ProviderSharedSecret() *string
```

- *Type:* *string

---

##### `ProviderUserNameTemplate`<sup>Required</sup> <a name="ProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.Authenticator.property.providerUserNameTemplate"></a>

```go
func ProviderUserNameTemplate() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-okta.authenticator.Authenticator.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.authenticator.Authenticator.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authenticator.Authenticator.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthenticatorConfig <a name="AuthenticatorConfig" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v11/authenticator"

&authenticator.AuthenticatorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Key: *string,
	Name: *string,
	Id: *string,
	ProviderAuthPort: *f64,
	ProviderHost: *string,
	ProviderHostname: *string,
	ProviderIntegrationKey: *string,
	ProviderJson: *string,
	ProviderSecretKey: *string,
	ProviderSharedSecret: *string,
	ProviderUserNameTemplate: *string,
	Settings: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key">Key</a></code> | <code>*string</code> | A human-readable string that identifies the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name">Name</a></code> | <code>*string</code> | Display name of the Authenticator. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#id Authenticator#id}. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort">ProviderAuthPort</a></code> | <code>*f64</code> | The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost">ProviderHost</a></code> | <code>*string</code> | The Duo Security API hostname. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname">ProviderHostname</a></code> | <code>*string</code> | Server host name or IP address. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey">ProviderIntegrationKey</a></code> | <code>*string</code> | The Duo Security integration key. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson">ProviderJson</a></code> | <code>*string</code> | Provider in JSON format. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey">ProviderSecretKey</a></code> | <code>*string</code> | The Duo Security secret key. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret">ProviderSharedSecret</a></code> | <code>*string</code> | An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate">ProviderUserNameTemplate</a></code> | <code>*string</code> | Format expected by the provider. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings">Settings</a></code> | <code>*string</code> | Authenticator settings in JSON format. |
| <code><a href="#@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status">Status</a></code> | <code>*string</code> | Authenticator status: ACTIVE or INACTIVE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

A human-readable string that identifies the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#key Authenticator#key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Display name of the Authenticator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#name Authenticator#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#id Authenticator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderAuthPort`<sup>Optional</sup> <a name="ProviderAuthPort" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerAuthPort"></a>

```go
ProviderAuthPort *f64
```

- *Type:* *f64

The RADIUS server port (for example 1812). This is defined when the On-Prem RADIUS server is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_auth_port Authenticator#provider_auth_port}

---

##### `ProviderHost`<sup>Optional</sup> <a name="ProviderHost" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHost"></a>

```go
ProviderHost *string
```

- *Type:* *string

The Duo Security API hostname.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_host Authenticator#provider_host}

---

##### `ProviderHostname`<sup>Optional</sup> <a name="ProviderHostname" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerHostname"></a>

```go
ProviderHostname *string
```

- *Type:* *string

Server host name or IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_hostname Authenticator#provider_hostname}

---

##### `ProviderIntegrationKey`<sup>Optional</sup> <a name="ProviderIntegrationKey" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerIntegrationKey"></a>

```go
ProviderIntegrationKey *string
```

- *Type:* *string

The Duo Security integration key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_integration_key Authenticator#provider_integration_key}

---

##### `ProviderJson`<sup>Optional</sup> <a name="ProviderJson" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerJson"></a>

```go
ProviderJson *string
```

- *Type:* *string

Provider in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_json Authenticator#provider_json}

---

##### `ProviderSecretKey`<sup>Optional</sup> <a name="ProviderSecretKey" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSecretKey"></a>

```go
ProviderSecretKey *string
```

- *Type:* *string

The Duo Security secret key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_secret_key Authenticator#provider_secret_key}

---

##### `ProviderSharedSecret`<sup>Optional</sup> <a name="ProviderSharedSecret" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerSharedSecret"></a>

```go
ProviderSharedSecret *string
```

- *Type:* *string

An authentication key that must be defined when the RADIUS server is configured, and must be the same on both the RADIUS client and server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_shared_secret Authenticator#provider_shared_secret}

---

##### `ProviderUserNameTemplate`<sup>Optional</sup> <a name="ProviderUserNameTemplate" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.providerUserNameTemplate"></a>

```go
ProviderUserNameTemplate *string
```

- *Type:* *string

Format expected by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#provider_user_name_template Authenticator#provider_user_name_template}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.settings"></a>

```go
Settings *string
```

- *Type:* *string

Authenticator settings in JSON format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#settings Authenticator#settings}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.authenticator.AuthenticatorConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Authenticator status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.2/docs/resources/authenticator#status Authenticator#status}

---



