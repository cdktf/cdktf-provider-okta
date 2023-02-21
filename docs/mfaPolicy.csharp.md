# `mfaPolicy` Submodule <a name="`mfaPolicy` Submodule" id="@cdktf/provider-okta.mfaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MfaPolicy <a name="MfaPolicy" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy okta_mfa_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new MfaPolicy(Construct Scope, string Id, MfaPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig">MfaPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig">MfaPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo">ResetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp">ResetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F">ResetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn">ResetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp">ResetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded">ResetGroupsIncluded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp">ResetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie">ResetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall">ResetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail">ResetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp">ResetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword">ResetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush">ResetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion">ResetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms">ResetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify">ResetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa">ResetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken">ResetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion">ResetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip">ResetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn">ResetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken">ResetYubikeyToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDuo` <a name="ResetDuo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetDuo"></a>

```csharp
private void ResetDuo()
```

##### `ResetExternalIdp` <a name="ResetExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetExternalIdp"></a>

```csharp
private void ResetExternalIdp()
```

##### `ResetFidoU2F` <a name="ResetFidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoU2F"></a>

```csharp
private void ResetFidoU2F()
```

##### `ResetFidoWebauthn` <a name="ResetFidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetFidoWebauthn"></a>

```csharp
private void ResetFidoWebauthn()
```

##### `ResetGoogleOtp` <a name="ResetGoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGoogleOtp"></a>

```csharp
private void ResetGoogleOtp()
```

##### `ResetGroupsIncluded` <a name="ResetGroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetGroupsIncluded"></a>

```csharp
private void ResetGroupsIncluded()
```

##### `ResetHotp` <a name="ResetHotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetHotp"></a>

```csharp
private void ResetHotp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOie` <a name="ResetIsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetIsOie"></a>

```csharp
private void ResetIsOie()
```

##### `ResetOktaCall` <a name="ResetOktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaCall"></a>

```csharp
private void ResetOktaCall()
```

##### `ResetOktaEmail` <a name="ResetOktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaEmail"></a>

```csharp
private void ResetOktaEmail()
```

##### `ResetOktaOtp` <a name="ResetOktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaOtp"></a>

```csharp
private void ResetOktaOtp()
```

##### `ResetOktaPassword` <a name="ResetOktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPassword"></a>

```csharp
private void ResetOktaPassword()
```

##### `ResetOktaPush` <a name="ResetOktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaPush"></a>

```csharp
private void ResetOktaPush()
```

##### `ResetOktaQuestion` <a name="ResetOktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaQuestion"></a>

```csharp
private void ResetOktaQuestion()
```

##### `ResetOktaSms` <a name="ResetOktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaSms"></a>

```csharp
private void ResetOktaSms()
```

##### `ResetOktaVerify` <a name="ResetOktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOktaVerify"></a>

```csharp
private void ResetOktaVerify()
```

##### `ResetOnpremMfa` <a name="ResetOnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetOnpremMfa"></a>

```csharp
private void ResetOnpremMfa()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRsaToken` <a name="ResetRsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetRsaToken"></a>

```csharp
private void ResetRsaToken()
```

##### `ResetSecurityQuestion` <a name="ResetSecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSecurityQuestion"></a>

```csharp
private void ResetSecurityQuestion()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSymantecVip` <a name="ResetSymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetSymantecVip"></a>

```csharp
private void ResetSymantecVip()
```

##### `ResetWebauthn` <a name="ResetWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetWebauthn"></a>

```csharp
private void ResetWebauthn()
```

##### `ResetYubikeyToken` <a name="ResetYubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.resetYubikeyToken"></a>

```csharp
private void ResetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

MfaPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

MfaPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

MfaPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput">DuoInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput">ExternalIdpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput">FidoU2FInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput">FidoWebauthnInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput">GoogleOtpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput">GroupsIncludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput">HotpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput">IsOieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput">OktaCallInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput">OktaEmailInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput">OktaOtpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput">OktaPasswordInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput">OktaPushInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput">OktaQuestionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput">OktaSmsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput">OktaVerifyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput">OnpremMfaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput">RsaTokenInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput">SecurityQuestionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput">SymantecVipInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput">WebauthnInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput">YubikeyTokenInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo">Duo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp">ExternalIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F">FidoU2F</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn">FidoWebauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp">GoogleOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp">Hotp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie">IsOie</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall">OktaCall</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail">OktaEmail</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp">OktaOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword">OktaPassword</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush">OktaPush</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion">OktaQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms">OktaSms</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify">OktaVerify</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa">OnpremMfa</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber">PhoneNumber</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken">RsaToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion">SecurityQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip">SymantecVip</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn">Webauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken">YubikeyToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DuoInput`<sup>Optional</sup> <a name="DuoInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duoInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DuoInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdpInput`<sup>Optional</sup> <a name="ExternalIdpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoU2FInput`<sup>Optional</sup> <a name="FidoU2FInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2FInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2FInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoWebauthnInput`<sup>Optional</sup> <a name="FidoWebauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthnInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthnInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GoogleOtpInput`<sup>Optional</sup> <a name="GoogleOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GroupsIncludedInput`<sup>Optional</sup> <a name="GroupsIncludedInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncludedInput"></a>

```csharp
public string[] GroupsIncludedInput { get; }
```

- *Type:* string[]

---

##### `HotpInput`<sup>Optional</sup> <a name="HotpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HotpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsOieInput`<sup>Optional</sup> <a name="IsOieInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOieInput"></a>

```csharp
public object IsOieInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OktaCallInput`<sup>Optional</sup> <a name="OktaCallInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCallInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCallInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaEmailInput`<sup>Optional</sup> <a name="OktaEmailInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmailInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmailInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaOtpInput`<sup>Optional</sup> <a name="OktaOtpInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPasswordInput`<sup>Optional</sup> <a name="OktaPasswordInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPasswordInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPasswordInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPushInput`<sup>Optional</sup> <a name="OktaPushInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPushInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPushInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaQuestionInput`<sup>Optional</sup> <a name="OktaQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaSmsInput`<sup>Optional</sup> <a name="OktaSmsInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSmsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSmsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaVerifyInput`<sup>Optional</sup> <a name="OktaVerifyInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerifyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerifyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnpremMfaInput`<sup>Optional</sup> <a name="OnpremMfaInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumberInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumberInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RsaTokenInput`<sup>Optional</sup> <a name="RsaTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaTokenInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaTokenInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityQuestionInput`<sup>Optional</sup> <a name="SecurityQuestionInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SymantecVipInput`<sup>Optional</sup> <a name="SymantecVipInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVipInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVipInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebauthnInput`<sup>Optional</sup> <a name="WebauthnInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthnInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WebauthnInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `YubikeyTokenInput`<sup>Optional</sup> <a name="YubikeyTokenInput" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyTokenInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyTokenInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Duo`<sup>Required</sup> <a name="Duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.duo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Duo { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdp`<sup>Required</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.externalIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoU2F`<sup>Required</sup> <a name="FidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoU2F"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2F { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoWebauthn`<sup>Required</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.fidoWebauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthn { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GoogleOtp`<sup>Required</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.googleOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GroupsIncluded`<sup>Required</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; }
```

- *Type:* string[]

---

##### `Hotp`<sup>Required</sup> <a name="Hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.hotp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hotp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOie`<sup>Required</sup> <a name="IsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.isOie"></a>

```csharp
public object IsOie { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OktaCall`<sup>Required</sup> <a name="OktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaCall"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCall { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaEmail`<sup>Required</sup> <a name="OktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaEmail"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmail { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaOtp`<sup>Required</sup> <a name="OktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPassword`<sup>Required</sup> <a name="OktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPassword"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPassword { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPush`<sup>Required</sup> <a name="OktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaPush"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPush { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaQuestion`<sup>Required</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaSms`<sup>Required</sup> <a name="OktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaSms"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSms { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaVerify`<sup>Required</sup> <a name="OktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.oktaVerify"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerify { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnpremMfa`<sup>Required</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.onpremMfa"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfa { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.phoneNumber"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumber { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RsaToken`<sup>Required</sup> <a name="RsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.rsaToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaToken { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityQuestion`<sup>Required</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.securityQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SymantecVip`<sup>Required</sup> <a name="SymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.symantecVip"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVip { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Webauthn`<sup>Required</sup> <a name="Webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.webauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Webauthn { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `YubikeyToken`<sup>Required</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.yubikeyToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyToken { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.mfaPolicy.MfaPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MfaPolicyConfig <a name="MfaPolicyConfig" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new MfaPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    System.Collections.Generic.IDictionary<string, string> Duo = null,
    System.Collections.Generic.IDictionary<string, string> ExternalIdp = null,
    System.Collections.Generic.IDictionary<string, string> FidoU2F = null,
    System.Collections.Generic.IDictionary<string, string> FidoWebauthn = null,
    System.Collections.Generic.IDictionary<string, string> GoogleOtp = null,
    string[] GroupsIncluded = null,
    System.Collections.Generic.IDictionary<string, string> Hotp = null,
    string Id = null,
    object IsOie = null,
    System.Collections.Generic.IDictionary<string, string> OktaCall = null,
    System.Collections.Generic.IDictionary<string, string> OktaEmail = null,
    System.Collections.Generic.IDictionary<string, string> OktaOtp = null,
    System.Collections.Generic.IDictionary<string, string> OktaPassword = null,
    System.Collections.Generic.IDictionary<string, string> OktaPush = null,
    System.Collections.Generic.IDictionary<string, string> OktaQuestion = null,
    System.Collections.Generic.IDictionary<string, string> OktaSms = null,
    System.Collections.Generic.IDictionary<string, string> OktaVerify = null,
    System.Collections.Generic.IDictionary<string, string> OnpremMfa = null,
    System.Collections.Generic.IDictionary<string, string> PhoneNumber = null,
    double Priority = null,
    System.Collections.Generic.IDictionary<string, string> RsaToken = null,
    System.Collections.Generic.IDictionary<string, string> SecurityQuestion = null,
    string Status = null,
    System.Collections.Generic.IDictionary<string, string> SymantecVip = null,
    System.Collections.Generic.IDictionary<string, string> Webauthn = null,
    System.Collections.Generic.IDictionary<string, string> YubikeyToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name">Name</a></code> | <code>string</code> | Policy Name. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description">Description</a></code> | <code>string</code> | Policy Description. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo">Duo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp">ExternalIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F">FidoU2F</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn">FidoWebauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp">GoogleOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded">GroupsIncluded</a></code> | <code>string[]</code> | List of Group IDs to Include. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp">Hotp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie">IsOie</a></code> | <code>object</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall">OktaCall</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail">OktaEmail</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp">OktaOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword">OktaPassword</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush">OktaPush</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion">OktaQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms">OktaSms</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify">OktaVerify</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa">OnpremMfa</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber">PhoneNumber</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority">Priority</a></code> | <code>double</code> | Policy Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken">RsaToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion">SecurityQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status">Status</a></code> | <code>string</code> | Policy Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip">SymantecVip</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn">Webauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}. |
| <code><a href="#@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken">YubikeyToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy Name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#name MfaPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Policy Description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#description MfaPolicy#description}

---

##### `Duo`<sup>Optional</sup> <a name="Duo" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.duo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Duo { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#duo MfaPolicy#duo}.

---

##### `ExternalIdp`<sup>Optional</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.externalIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#external_idp MfaPolicy#external_idp}.

---

##### `FidoU2F`<sup>Optional</sup> <a name="FidoU2F" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoU2F"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2F { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_u2f MfaPolicy#fido_u2f}.

---

##### `FidoWebauthn`<sup>Optional</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.fidoWebauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthn { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#fido_webauthn MfaPolicy#fido_webauthn}.

---

##### `GoogleOtp`<sup>Optional</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.googleOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#google_otp MfaPolicy#google_otp}.

---

##### `GroupsIncluded`<sup>Optional</sup> <a name="GroupsIncluded" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.groupsIncluded"></a>

```csharp
public string[] GroupsIncluded { get; set; }
```

- *Type:* string[]

List of Group IDs to Include.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#groups_included MfaPolicy#groups_included}

---

##### `Hotp`<sup>Optional</sup> <a name="Hotp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.hotp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hotp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#hotp MfaPolicy#hotp}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#id MfaPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOie`<sup>Optional</sup> <a name="IsOie" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.isOie"></a>

```csharp
public object IsOie { get; set; }
```

- *Type:* object

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#is_oie MfaPolicy#is_oie}

---

##### `OktaCall`<sup>Optional</sup> <a name="OktaCall" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaCall"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCall { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_call MfaPolicy#okta_call}.

---

##### `OktaEmail`<sup>Optional</sup> <a name="OktaEmail" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaEmail"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmail { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_email MfaPolicy#okta_email}.

---

##### `OktaOtp`<sup>Optional</sup> <a name="OktaOtp" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_otp MfaPolicy#okta_otp}.

---

##### `OktaPassword`<sup>Optional</sup> <a name="OktaPassword" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPassword"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPassword { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_password MfaPolicy#okta_password}.

---

##### `OktaPush`<sup>Optional</sup> <a name="OktaPush" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaPush"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPush { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_push MfaPolicy#okta_push}.

---

##### `OktaQuestion`<sup>Optional</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_question MfaPolicy#okta_question}.

---

##### `OktaSms`<sup>Optional</sup> <a name="OktaSms" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaSms"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSms { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_sms MfaPolicy#okta_sms}.

---

##### `OktaVerify`<sup>Optional</sup> <a name="OktaVerify" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.oktaVerify"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerify { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#okta_verify MfaPolicy#okta_verify}.

---

##### `OnpremMfa`<sup>Optional</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.onpremMfa"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfa { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#onprem_mfa MfaPolicy#onprem_mfa}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.phoneNumber"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumber { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#phone_number MfaPolicy#phone_number}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Policy Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#priority MfaPolicy#priority}

---

##### `RsaToken`<sup>Optional</sup> <a name="RsaToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.rsaToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaToken { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#rsa_token MfaPolicy#rsa_token}.

---

##### `SecurityQuestion`<sup>Optional</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.securityQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#security_question MfaPolicy#security_question}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Policy Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#status MfaPolicy#status}

---

##### `SymantecVip`<sup>Optional</sup> <a name="SymantecVip" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.symantecVip"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVip { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#symantec_vip MfaPolicy#symantec_vip}.

---

##### `Webauthn`<sup>Optional</sup> <a name="Webauthn" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.webauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Webauthn { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#webauthn MfaPolicy#webauthn}.

---

##### `YubikeyToken`<sup>Optional</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.mfaPolicy.MfaPolicyConfig.property.yubikeyToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyToken { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/mfa_policy#yubikey_token MfaPolicy#yubikey_token}.

---



