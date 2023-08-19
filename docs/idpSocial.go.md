# `okta_idp_social`

Refer to the Terraform Registory for docs: [`okta_idp_social`](https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social).

# `idpSocial` Submodule <a name="`idpSocial` Submodule" id="@cdktf/provider-okta.idpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdpSocial <a name="IdpSocial" id="@cdktf/provider-okta.idpSocial.IdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/idpsocial"

idpsocial.NewIdpSocial(scope Construct, id *string, config IdpSocialConfig) IdpSocial
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig">IdpSocialConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-okta.idpSocial.IdpSocial.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig">IdpSocialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid">ResetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey">ResetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId">ResetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.idpSocial.IdpSocial.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-okta.idpSocial.IdpSocial.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.idpSocial.IdpSocial.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkAction"></a>

```go
func ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAccountLinkGroupInclude"></a>

```go
func ResetAccountLinkGroupInclude()
```

##### `ResetAppleKid` <a name="ResetAppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleKid"></a>

```go
func ResetAppleKid()
```

##### `ResetApplePrivateKey` <a name="ResetApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetApplePrivateKey"></a>

```go
func ResetApplePrivateKey()
```

##### `ResetAppleTeamId` <a name="ResetAppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetAppleTeamId"></a>

```go
func ResetAppleTeamId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetDeprovisionedAction"></a>

```go
func ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAction"></a>

```go
func ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAssignment"></a>

```go
func ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsAttribute"></a>

```go
func ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetGroupsFilter"></a>

```go
func ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetIssuerMode"></a>

```go
func ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetMaxClockSkew"></a>

```go
func ResetMaxClockSkew()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProfileMaster"></a>

```go
func ResetProfileMaster()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProtocolType"></a>

```go
func ResetProtocolType()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetProvisioningAction"></a>

```go
func ResetProvisioningAction()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchAttribute"></a>

```go
func ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSubjectMatchType"></a>

```go
func ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetSuspendedAction"></a>

```go
func ResetSuspendedAction()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.resetUsernameTemplate"></a>

```go
func ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/idpsocial"

idpsocial.IdpSocial_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/idpsocial"

idpsocial.IdpSocial_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/idpsocial"

idpsocial.IdpSocial_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-okta.idpSocial.IdpSocial.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding">AuthorizationBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl">AuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding">TokenBinding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl">TokenUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput">AppleKidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput">ApplePrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput">AppleTeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput">GroupsActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput">IssuerModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput">ProfileMasterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid">AppleKid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey">ApplePrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId">AppleTeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationBinding"></a>

```go
func AuthorizationBinding() *string
```

- *Type:* *string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.authorizationUrl"></a>

```go
func AuthorizationUrl() *string
```

- *Type:* *string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenBinding"></a>

```go
func TokenBinding() *string
```

- *Type:* *string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tokenUrl"></a>

```go
func TokenUrl() *string
```

- *Type:* *string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkActionInput"></a>

```go
func AccountLinkActionInput() *string
```

- *Type:* *string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupIncludeInput"></a>

```go
func AccountLinkGroupIncludeInput() *[]*string
```

- *Type:* *[]*string

---

##### `AppleKidInput`<sup>Optional</sup> <a name="AppleKidInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKidInput"></a>

```go
func AppleKidInput() *string
```

- *Type:* *string

---

##### `ApplePrivateKeyInput`<sup>Optional</sup> <a name="ApplePrivateKeyInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKeyInput"></a>

```go
func ApplePrivateKeyInput() *string
```

- *Type:* *string

---

##### `AppleTeamIdInput`<sup>Optional</sup> <a name="AppleTeamIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamIdInput"></a>

```go
func AppleTeamIdInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedActionInput"></a>

```go
func DeprovisionedActionInput() *string
```

- *Type:* *string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsActionInput"></a>

```go
func GroupsActionInput() *string
```

- *Type:* *string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignmentInput"></a>

```go
func GroupsAssignmentInput() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttributeInput"></a>

```go
func GroupsAttributeInput() *string
```

- *Type:* *string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilterInput"></a>

```go
func GroupsFilterInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerModeInput"></a>

```go
func IssuerModeInput() *string
```

- *Type:* *string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkewInput"></a>

```go
func MaxClockSkewInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMasterInput"></a>

```go
func ProfileMasterInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolTypeInput"></a>

```go
func ProtocolTypeInput() *string
```

- *Type:* *string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningActionInput"></a>

```go
func ProvisioningActionInput() *string
```

- *Type:* *string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttributeInput"></a>

```go
func SubjectMatchAttributeInput() *string
```

- *Type:* *string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchTypeInput"></a>

```go
func SubjectMatchTypeInput() *string
```

- *Type:* *string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedActionInput"></a>

```go
func SuspendedActionInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplateInput"></a>

```go
func UsernameTemplateInput() *string
```

- *Type:* *string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkAction"></a>

```go
func AccountLinkAction() *string
```

- *Type:* *string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.accountLinkGroupInclude"></a>

```go
func AccountLinkGroupInclude() *[]*string
```

- *Type:* *[]*string

---

##### `AppleKid`<sup>Required</sup> <a name="AppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleKid"></a>

```go
func AppleKid() *string
```

- *Type:* *string

---

##### `ApplePrivateKey`<sup>Required</sup> <a name="ApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.applePrivateKey"></a>

```go
func ApplePrivateKey() *string
```

- *Type:* *string

---

##### `AppleTeamId`<sup>Required</sup> <a name="AppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.appleTeamId"></a>

```go
func AppleTeamId() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.deprovisionedAction"></a>

```go
func DeprovisionedAction() *string
```

- *Type:* *string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAction"></a>

```go
func GroupsAction() *string
```

- *Type:* *string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAssignment"></a>

```go
func GroupsAssignment() *[]*string
```

- *Type:* *[]*string

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsAttribute"></a>

```go
func GroupsAttribute() *string
```

- *Type:* *string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.groupsFilter"></a>

```go
func GroupsFilter() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.issuerMode"></a>

```go
func IssuerMode() *string
```

- *Type:* *string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.maxClockSkew"></a>

```go
func MaxClockSkew() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.profileMaster"></a>

```go
func ProfileMaster() interface{}
```

- *Type:* interface{}

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.provisioningAction"></a>

```go
func ProvisioningAction() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchAttribute"></a>

```go
func SubjectMatchAttribute() *string
```

- *Type:* *string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.subjectMatchType"></a>

```go
func SubjectMatchType() *string
```

- *Type:* *string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.suspendedAction"></a>

```go
func SuspendedAction() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.usernameTemplate"></a>

```go
func UsernameTemplate() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.idpSocial.IdpSocial.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpSocialConfig <a name="IdpSocialConfig" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-okta-go/okta/v10/idpsocial"

&idpsocial.IdpSocialConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Scopes: *[]*string,
	Type: *string,
	AccountLinkAction: *string,
	AccountLinkGroupInclude: *[]*string,
	AppleKid: *string,
	ApplePrivateKey: *string,
	AppleTeamId: *string,
	ClientId: *string,
	ClientSecret: *string,
	DeprovisionedAction: *string,
	GroupsAction: *string,
	GroupsAssignment: *[]*string,
	GroupsAttribute: *string,
	GroupsFilter: *[]*string,
	Id: *string,
	IssuerMode: *string,
	MaxClockSkew: *f64,
	ProfileMaster: interface{},
	ProtocolType: *string,
	ProvisioningAction: *string,
	Status: *string,
	SubjectMatchAttribute: *string,
	SubjectMatchType: *string,
	SuspendedAction: *string,
	UsernameTemplate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name">Name</a></code> | <code>*string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#scopes IdpSocial#scopes}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type">Type</a></code> | <code>*string</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid">AppleKid</a></code> | <code>*string</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey">ApplePrivateKey</a></code> | <code>*string</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId">AppleTeamId</a></code> | <code>*string</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#client_id IdpSocial#client_id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction">GroupsAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter">GroupsFilter</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#id IdpSocial#id}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode">IssuerMode</a></code> | <code>*string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster">ProfileMaster</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType">ProtocolType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#status IdpSocial#status}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction">SuspendedAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#username_template IdpSocial#username_template}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#name IdpSocial#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#scopes IdpSocial#scopes}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#type IdpSocial#type}

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkAction"></a>

```go
AccountLinkAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#account_link_action IdpSocial#account_link_action}.

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.accountLinkGroupInclude"></a>

```go
AccountLinkGroupInclude *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#account_link_group_include IdpSocial#account_link_group_include}.

---

##### `AppleKid`<sup>Optional</sup> <a name="AppleKid" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleKid"></a>

```go
AppleKid *string
```

- *Type:* *string

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#apple_kid IdpSocial#apple_kid}

---

##### `ApplePrivateKey`<sup>Optional</sup> <a name="ApplePrivateKey" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.applePrivateKey"></a>

```go
ApplePrivateKey *string
```

- *Type:* *string

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#apple_private_key IdpSocial#apple_private_key}

---

##### `AppleTeamId`<sup>Optional</sup> <a name="AppleTeamId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.appleTeamId"></a>

```go
AppleTeamId *string
```

- *Type:* *string

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#apple_team_id IdpSocial#apple_team_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#client_id IdpSocial#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#client_secret IdpSocial#client_secret}.

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.deprovisionedAction"></a>

```go
DeprovisionedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#deprovisioned_action IdpSocial#deprovisioned_action}.

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAction"></a>

```go
GroupsAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_action IdpSocial#groups_action}.

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAssignment"></a>

```go
GroupsAssignment *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_assignment IdpSocial#groups_assignment}.

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsAttribute"></a>

```go
GroupsAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_attribute IdpSocial#groups_attribute}.

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.groupsFilter"></a>

```go
GroupsFilter *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#groups_filter IdpSocial#groups_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#id IdpSocial#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.issuerMode"></a>

```go
IssuerMode *string
```

- *Type:* *string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#issuer_mode IdpSocial#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.maxClockSkew"></a>

```go
MaxClockSkew *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#max_clock_skew IdpSocial#max_clock_skew}.

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.profileMaster"></a>

```go
ProfileMaster interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#profile_master IdpSocial#profile_master}.

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.protocolType"></a>

```go
ProtocolType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#protocol_type IdpSocial#protocol_type}.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.provisioningAction"></a>

```go
ProvisioningAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#provisioning_action IdpSocial#provisioning_action}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#status IdpSocial#status}.

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchAttribute"></a>

```go
SubjectMatchAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#subject_match_attribute IdpSocial#subject_match_attribute}.

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.subjectMatchType"></a>

```go
SubjectMatchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#subject_match_type IdpSocial#subject_match_type}.

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.suspendedAction"></a>

```go
SuspendedAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#suspended_action IdpSocial#suspended_action}.

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idpSocial.IdpSocialConfig.property.usernameTemplate"></a>

```go
UsernameTemplate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.3.0/docs/resources/idp_social#username_template IdpSocial#username_template}.

---



