# `okta_social_idp`

Refer to the Terraform Registory for docs: [`okta_social_idp`](https://www.terraform.io/docs/providers/okta/r/social_idp).

# `socialIdp` Submodule <a name="`socialIdp` Submodule" id="@cdktf/provider-okta.socialIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SocialIdp <a name="SocialIdp" id="@cdktf/provider-okta.socialIdp.SocialIdp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/social_idp okta_social_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SocialIdp(Construct Scope, string Id, SocialIdpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig">SocialIdpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.socialIdp.SocialIdp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig">SocialIdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleKid">ResetAppleKid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetApplePrivateKey">ResetApplePrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleTeamId">ResetAppleTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchAttribute">ResetMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchType">ResetMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.socialIdp.SocialIdp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.socialIdp.SocialIdp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.socialIdp.SocialIdp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.socialIdp.SocialIdp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkAction"></a>

```csharp
private void ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAccountLinkGroupInclude"></a>

```csharp
private void ResetAccountLinkGroupInclude()
```

##### `ResetAppleKid` <a name="ResetAppleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleKid"></a>

```csharp
private void ResetAppleKid()
```

##### `ResetApplePrivateKey` <a name="ResetApplePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetApplePrivateKey"></a>

```csharp
private void ResetApplePrivateKey()
```

##### `ResetAppleTeamId` <a name="ResetAppleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetAppleTeamId"></a>

```csharp
private void ResetAppleTeamId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetDeprovisionedAction"></a>

```csharp
private void ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAction"></a>

```csharp
private void ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAssignment"></a>

```csharp
private void ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsAttribute"></a>

```csharp
private void ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetGroupsFilter"></a>

```csharp
private void ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetMatchAttribute` <a name="ResetMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchAttribute"></a>

```csharp
private void ResetMatchAttribute()
```

##### `ResetMatchType` <a name="ResetMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMatchType"></a>

```csharp
private void ResetMatchType()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetMaxClockSkew"></a>

```csharp
private void ResetMaxClockSkew()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProfileMaster"></a>

```csharp
private void ResetProfileMaster()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetProvisioningAction"></a>

```csharp
private void ResetProvisioningAction()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchAttribute"></a>

```csharp
private void ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSubjectMatchType"></a>

```csharp
private void ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetSuspendedAction"></a>

```csharp
private void ResetSuspendedAction()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SocialIdp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.socialIdp.SocialIdp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SocialIdp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SocialIdp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.socialIdp.SocialIdp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKidInput">AppleKidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKeyInput">ApplePrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamIdInput">AppleTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsActionInput">GroupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttributeInput">MatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchTypeInput">MatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMasterInput">ProfileMasterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKid">AppleKid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKey">ApplePrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamId">AppleTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAction">GroupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttribute">MatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkActionInput"></a>

```csharp
public string AccountLinkActionInput { get; }
```

- *Type:* string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupIncludeInput"></a>

```csharp
public string[] AccountLinkGroupIncludeInput { get; }
```

- *Type:* string[]

---

##### `AppleKidInput`<sup>Optional</sup> <a name="AppleKidInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKidInput"></a>

```csharp
public string AppleKidInput { get; }
```

- *Type:* string

---

##### `ApplePrivateKeyInput`<sup>Optional</sup> <a name="ApplePrivateKeyInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKeyInput"></a>

```csharp
public string ApplePrivateKeyInput { get; }
```

- *Type:* string

---

##### `AppleTeamIdInput`<sup>Optional</sup> <a name="AppleTeamIdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamIdInput"></a>

```csharp
public string AppleTeamIdInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedActionInput"></a>

```csharp
public string DeprovisionedActionInput { get; }
```

- *Type:* string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsActionInput"></a>

```csharp
public string GroupsActionInput { get; }
```

- *Type:* string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignmentInput"></a>

```csharp
public string[] GroupsAssignmentInput { get; }
```

- *Type:* string[]

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttributeInput"></a>

```csharp
public string GroupsAttributeInput { get; }
```

- *Type:* string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilterInput"></a>

```csharp
public string[] GroupsFilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `MatchAttributeInput`<sup>Optional</sup> <a name="MatchAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttributeInput"></a>

```csharp
public string MatchAttributeInput { get; }
```

- *Type:* string

---

##### `MatchTypeInput`<sup>Optional</sup> <a name="MatchTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchTypeInput"></a>

```csharp
public string MatchTypeInput { get; }
```

- *Type:* string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkewInput"></a>

```csharp
public double MaxClockSkewInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMasterInput"></a>

```csharp
public object ProfileMasterInput { get; }
```

- *Type:* object

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningActionInput"></a>

```csharp
public string ProvisioningActionInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttributeInput"></a>

```csharp
public string SubjectMatchAttributeInput { get; }
```

- *Type:* string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchTypeInput"></a>

```csharp
public string SubjectMatchTypeInput { get; }
```

- *Type:* string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedActionInput"></a>

```csharp
public string SuspendedActionInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; }
```

- *Type:* string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; }
```

- *Type:* string[]

---

##### `AppleKid`<sup>Required</sup> <a name="AppleKid" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleKid"></a>

```csharp
public string AppleKid { get; }
```

- *Type:* string

---

##### `ApplePrivateKey`<sup>Required</sup> <a name="ApplePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.applePrivateKey"></a>

```csharp
public string ApplePrivateKey { get; }
```

- *Type:* string

---

##### `AppleTeamId`<sup>Required</sup> <a name="AppleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.appleTeamId"></a>

```csharp
public string AppleTeamId { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; }
```

- *Type:* string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAction"></a>

```csharp
public string GroupsAction { get; }
```

- *Type:* string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; }
```

- *Type:* string[]

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; }
```

- *Type:* string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `MatchAttribute`<sup>Required</sup> <a name="MatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchAttribute"></a>

```csharp
public string MatchAttribute { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; }
```

- *Type:* object

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; }
```

- *Type:* string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; }
```

- *Type:* string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.socialIdp.SocialIdp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SocialIdpConfig <a name="SocialIdpConfig" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SocialIdpConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] Scopes,
    string Type,
    string AccountLinkAction = null,
    string[] AccountLinkGroupInclude = null,
    string AppleKid = null,
    string ApplePrivateKey = null,
    string AppleTeamId = null,
    string ClientId = null,
    string ClientSecret = null,
    string DeprovisionedAction = null,
    string GroupsAction = null,
    string[] GroupsAssignment = null,
    string GroupsAttribute = null,
    string[] GroupsFilter = null,
    string Id = null,
    string IssuerMode = null,
    string MatchAttribute = null,
    string MatchType = null,
    double MaxClockSkew = null,
    object ProfileMaster = null,
    string ProtocolType = null,
    string ProvisioningAction = null,
    string Status = null,
    string SubjectMatchAttribute = null,
    string SubjectMatchType = null,
    string SuspendedAction = null,
    string UsernameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.name">Name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#scopes SocialIdp#scopes}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.type">Type</a></code> | <code>string</code> | Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_action SocialIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_group_include SocialIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleKid">AppleKid</a></code> | <code>string</code> | The Key ID that you obtained from Apple when you created the private key for the client. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.applePrivateKey">ApplePrivateKey</a></code> | <code>string</code> | The PKCS #8 encoded private key that you created for the client and downloaded from Apple. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleTeamId">AppleTeamId</a></code> | <code>string</code> | The Team ID associated with your Apple developer account. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_id SocialIdp#client_id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_secret SocialIdp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAction">GroupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_action SocialIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_assignment SocialIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_attribute SocialIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_filter SocialIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#id SocialIdp#id}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchAttribute">MatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_attribute SocialIdp#match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchType">MatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_type SocialIdp#match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#max_clock_skew SocialIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#profile_master SocialIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#protocol_type SocialIdp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#provisioning_action SocialIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#status SocialIdp#status}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_type SocialIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#suspended_action SocialIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#username_template SocialIdp#username_template}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#name SocialIdp#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#scopes SocialIdp#scopes}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Identity Provider Types: https://developer.okta.com/docs/reference/api/idps/#identity-provider-type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#type SocialIdp#type}

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_action SocialIdp#account_link_action}.

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#account_link_group_include SocialIdp#account_link_group_include}.

---

##### `AppleKid`<sup>Optional</sup> <a name="AppleKid" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleKid"></a>

```csharp
public string AppleKid { get; set; }
```

- *Type:* string

The Key ID that you obtained from Apple when you created the private key for the client.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#apple_kid SocialIdp#apple_kid}

---

##### `ApplePrivateKey`<sup>Optional</sup> <a name="ApplePrivateKey" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.applePrivateKey"></a>

```csharp
public string ApplePrivateKey { get; set; }
```

- *Type:* string

The PKCS #8 encoded private key that you created for the client and downloaded from Apple.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#apple_private_key SocialIdp#apple_private_key}

---

##### `AppleTeamId`<sup>Optional</sup> <a name="AppleTeamId" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.appleTeamId"></a>

```csharp
public string AppleTeamId { get; set; }
```

- *Type:* string

The Team ID associated with your Apple developer account.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#apple_team_id SocialIdp#apple_team_id}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_id SocialIdp#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#client_secret SocialIdp#client_secret}.

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#deprovisioned_action SocialIdp#deprovisioned_action}.

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAction"></a>

```csharp
public string GroupsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_action SocialIdp#groups_action}.

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_assignment SocialIdp#groups_assignment}.

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_attribute SocialIdp#groups_attribute}.

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#groups_filter SocialIdp#groups_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#id SocialIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#issuer_mode SocialIdp#issuer_mode}

---

##### `MatchAttribute`<sup>Optional</sup> <a name="MatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchAttribute"></a>

```csharp
public string MatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_attribute SocialIdp#match_attribute}.

---

##### `MatchType`<sup>Optional</sup> <a name="MatchType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.matchType"></a>

```csharp
public string MatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#match_type SocialIdp#match_type}.

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#max_clock_skew SocialIdp#max_clock_skew}.

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#profile_master SocialIdp#profile_master}.

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#protocol_type SocialIdp#protocol_type}.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#provisioning_action SocialIdp#provisioning_action}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#status SocialIdp#status}.

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_attribute SocialIdp#subject_match_attribute}.

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#subject_match_type SocialIdp#subject_match_type}.

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#suspended_action SocialIdp#suspended_action}.

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.socialIdp.SocialIdpConfig.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/social_idp#username_template SocialIdp#username_template}.

---



