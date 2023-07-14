# `okta_policy_mfa_default`

Refer to the Terraform Registory for docs: [`okta_policy_mfa_default`](https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default).

# `policyMfaDefault` Submodule <a name="`policyMfaDefault` Submodule" id="@cdktf/provider-okta.policyMfaDefault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyMfaDefault <a name="PolicyMfaDefault" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default okta_policy_mfa_default}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyMfaDefault(Construct Scope, string Id, PolicyMfaDefaultConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig">PolicyMfaDefaultConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig">PolicyMfaDefaultConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo">ResetDuo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp">ResetExternalIdp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F">ResetFidoU2F</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn">ResetFidoWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp">ResetGoogleOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp">ResetHotp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie">ResetIsOie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall">ResetOktaCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail">ResetOktaEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp">ResetOktaOtp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword">ResetOktaPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush">ResetOktaPush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion">ResetOktaQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms">ResetOktaSms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify">ResetOktaVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa">ResetOnpremMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken">ResetRsaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion">ResetSecurityQuestion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip">ResetSymantecVip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn">ResetWebauthn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken">ResetYubikeyToken</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDuo` <a name="ResetDuo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetDuo"></a>

```csharp
private void ResetDuo()
```

##### `ResetExternalIdp` <a name="ResetExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetExternalIdp"></a>

```csharp
private void ResetExternalIdp()
```

##### `ResetFidoU2F` <a name="ResetFidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoU2F"></a>

```csharp
private void ResetFidoU2F()
```

##### `ResetFidoWebauthn` <a name="ResetFidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetFidoWebauthn"></a>

```csharp
private void ResetFidoWebauthn()
```

##### `ResetGoogleOtp` <a name="ResetGoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetGoogleOtp"></a>

```csharp
private void ResetGoogleOtp()
```

##### `ResetHotp` <a name="ResetHotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetHotp"></a>

```csharp
private void ResetHotp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOie` <a name="ResetIsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetIsOie"></a>

```csharp
private void ResetIsOie()
```

##### `ResetOktaCall` <a name="ResetOktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaCall"></a>

```csharp
private void ResetOktaCall()
```

##### `ResetOktaEmail` <a name="ResetOktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaEmail"></a>

```csharp
private void ResetOktaEmail()
```

##### `ResetOktaOtp` <a name="ResetOktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaOtp"></a>

```csharp
private void ResetOktaOtp()
```

##### `ResetOktaPassword` <a name="ResetOktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPassword"></a>

```csharp
private void ResetOktaPassword()
```

##### `ResetOktaPush` <a name="ResetOktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaPush"></a>

```csharp
private void ResetOktaPush()
```

##### `ResetOktaQuestion` <a name="ResetOktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaQuestion"></a>

```csharp
private void ResetOktaQuestion()
```

##### `ResetOktaSms` <a name="ResetOktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaSms"></a>

```csharp
private void ResetOktaSms()
```

##### `ResetOktaVerify` <a name="ResetOktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOktaVerify"></a>

```csharp
private void ResetOktaVerify()
```

##### `ResetOnpremMfa` <a name="ResetOnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetOnpremMfa"></a>

```csharp
private void ResetOnpremMfa()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetPhoneNumber"></a>

```csharp
private void ResetPhoneNumber()
```

##### `ResetRsaToken` <a name="ResetRsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetRsaToken"></a>

```csharp
private void ResetRsaToken()
```

##### `ResetSecurityQuestion` <a name="ResetSecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSecurityQuestion"></a>

```csharp
private void ResetSecurityQuestion()
```

##### `ResetSymantecVip` <a name="ResetSymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetSymantecVip"></a>

```csharp
private void ResetSymantecVip()
```

##### `ResetWebauthn` <a name="ResetWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetWebauthn"></a>

```csharp
private void ResetWebauthn()
```

##### `ResetYubikeyToken` <a name="ResetYubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.resetYubikeyToken"></a>

```csharp
private void ResetYubikeyToken()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfaDefault.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfaDefault.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyMfaDefault.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId">DefaultIncludedGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput">DuoInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput">ExternalIdpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput">FidoU2FInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput">FidoWebauthnInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput">GoogleOtpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput">HotpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput">IsOieInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput">OktaCallInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput">OktaEmailInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput">OktaOtpInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput">OktaPasswordInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput">OktaPushInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput">OktaQuestionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput">OktaSmsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput">OktaVerifyInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput">OnpremMfaInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput">RsaTokenInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput">SecurityQuestionInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput">SymantecVipInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput">WebauthnInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput">YubikeyTokenInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo">Duo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp">ExternalIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F">FidoU2F</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn">FidoWebauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp">GoogleOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp">Hotp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie">IsOie</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall">OktaCall</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail">OktaEmail</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp">OktaOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword">OktaPassword</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush">OktaPush</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion">OktaQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms">OktaSms</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify">OktaVerify</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa">OnpremMfa</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber">PhoneNumber</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken">RsaToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion">SecurityQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip">SymantecVip</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn">Webauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken">YubikeyToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DefaultIncludedGroupId`<sup>Required</sup> <a name="DefaultIncludedGroupId" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.defaultIncludedGroupId"></a>

```csharp
public string DefaultIncludedGroupId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `DuoInput`<sup>Optional</sup> <a name="DuoInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duoInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DuoInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdpInput`<sup>Optional</sup> <a name="ExternalIdpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoU2FInput`<sup>Optional</sup> <a name="FidoU2FInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2FInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2FInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoWebauthnInput`<sup>Optional</sup> <a name="FidoWebauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthnInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthnInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GoogleOtpInput`<sup>Optional</sup> <a name="GoogleOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `HotpInput`<sup>Optional</sup> <a name="HotpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HotpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsOieInput`<sup>Optional</sup> <a name="IsOieInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOieInput"></a>

```csharp
public object IsOieInput { get; }
```

- *Type:* object

---

##### `OktaCallInput`<sup>Optional</sup> <a name="OktaCallInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCallInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCallInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaEmailInput`<sup>Optional</sup> <a name="OktaEmailInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmailInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmailInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaOtpInput`<sup>Optional</sup> <a name="OktaOtpInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtpInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtpInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPasswordInput`<sup>Optional</sup> <a name="OktaPasswordInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPasswordInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPasswordInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPushInput`<sup>Optional</sup> <a name="OktaPushInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPushInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPushInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaQuestionInput`<sup>Optional</sup> <a name="OktaQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaSmsInput`<sup>Optional</sup> <a name="OktaSmsInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSmsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSmsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaVerifyInput`<sup>Optional</sup> <a name="OktaVerifyInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerifyInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerifyInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnpremMfaInput`<sup>Optional</sup> <a name="OnpremMfaInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfaInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfaInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumberInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumberInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RsaTokenInput`<sup>Optional</sup> <a name="RsaTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaTokenInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaTokenInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityQuestionInput`<sup>Optional</sup> <a name="SecurityQuestionInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestionInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestionInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SymantecVipInput`<sup>Optional</sup> <a name="SymantecVipInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVipInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVipInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebauthnInput`<sup>Optional</sup> <a name="WebauthnInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthnInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> WebauthnInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `YubikeyTokenInput`<sup>Optional</sup> <a name="YubikeyTokenInput" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyTokenInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyTokenInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Duo`<sup>Required</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.duo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Duo { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ExternalIdp`<sup>Required</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.externalIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoU2F`<sup>Required</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoU2F"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2F { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `FidoWebauthn`<sup>Required</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.fidoWebauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthn { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `GoogleOtp`<sup>Required</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.googleOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Hotp`<sup>Required</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.hotp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hotp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOie`<sup>Required</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.isOie"></a>

```csharp
public object IsOie { get; }
```

- *Type:* object

---

##### `OktaCall`<sup>Required</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaCall"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCall { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaEmail`<sup>Required</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaEmail"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmail { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaOtp`<sup>Required</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtp { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPassword`<sup>Required</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPassword"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPassword { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaPush`<sup>Required</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaPush"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPush { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaQuestion`<sup>Required</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaSms`<sup>Required</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaSms"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSms { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OktaVerify`<sup>Required</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.oktaVerify"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerify { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `OnpremMfa`<sup>Required</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.onpremMfa"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfa { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.phoneNumber"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumber { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RsaToken`<sup>Required</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.rsaToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaToken { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecurityQuestion`<sup>Required</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.securityQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestion { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SymantecVip`<sup>Required</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.symantecVip"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVip { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Webauthn`<sup>Required</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.webauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Webauthn { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `YubikeyToken`<sup>Required</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.yubikeyToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyToken { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefault.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyMfaDefaultConfig <a name="PolicyMfaDefaultConfig" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyMfaDefaultConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    System.Collections.Generic.IDictionary<string, string> Duo = null,
    System.Collections.Generic.IDictionary<string, string> ExternalIdp = null,
    System.Collections.Generic.IDictionary<string, string> FidoU2F = null,
    System.Collections.Generic.IDictionary<string, string> FidoWebauthn = null,
    System.Collections.Generic.IDictionary<string, string> GoogleOtp = null,
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
    System.Collections.Generic.IDictionary<string, string> RsaToken = null,
    System.Collections.Generic.IDictionary<string, string> SecurityQuestion = null,
    System.Collections.Generic.IDictionary<string, string> SymantecVip = null,
    System.Collections.Generic.IDictionary<string, string> Webauthn = null,
    System.Collections.Generic.IDictionary<string, string> YubikeyToken = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo">Duo</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp">ExternalIdp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F">FidoU2F</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn">FidoWebauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp">GoogleOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp">Hotp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie">IsOie</a></code> | <code>object</code> | Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors? |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall">OktaCall</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail">OktaEmail</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp">OktaOtp</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword">OktaPassword</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush">OktaPush</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion">OktaQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms">OktaSms</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify">OktaVerify</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa">OnpremMfa</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber">PhoneNumber</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken">RsaToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion">SecurityQuestion</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip">SymantecVip</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn">Webauthn</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}. |
| <code><a href="#@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken">YubikeyToken</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Duo`<sup>Optional</sup> <a name="Duo" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.duo"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Duo { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}.

---

##### `ExternalIdp`<sup>Optional</sup> <a name="ExternalIdp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.externalIdp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ExternalIdp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}.

---

##### `FidoU2F`<sup>Optional</sup> <a name="FidoU2F" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoU2F"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoU2F { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}.

---

##### `FidoWebauthn`<sup>Optional</sup> <a name="FidoWebauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.fidoWebauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> FidoWebauthn { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}.

---

##### `GoogleOtp`<sup>Optional</sup> <a name="GoogleOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.googleOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> GoogleOtp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}.

---

##### `Hotp`<sup>Optional</sup> <a name="Hotp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.hotp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Hotp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOie`<sup>Optional</sup> <a name="IsOie" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.isOie"></a>

```csharp
public object IsOie { get; set; }
```

- *Type:* object

Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}

---

##### `OktaCall`<sup>Optional</sup> <a name="OktaCall" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaCall"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaCall { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}.

---

##### `OktaEmail`<sup>Optional</sup> <a name="OktaEmail" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaEmail"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaEmail { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}.

---

##### `OktaOtp`<sup>Optional</sup> <a name="OktaOtp" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaOtp"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaOtp { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}.

---

##### `OktaPassword`<sup>Optional</sup> <a name="OktaPassword" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPassword"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPassword { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}.

---

##### `OktaPush`<sup>Optional</sup> <a name="OktaPush" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaPush"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaPush { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}.

---

##### `OktaQuestion`<sup>Optional</sup> <a name="OktaQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaQuestion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}.

---

##### `OktaSms`<sup>Optional</sup> <a name="OktaSms" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaSms"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaSms { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}.

---

##### `OktaVerify`<sup>Optional</sup> <a name="OktaVerify" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.oktaVerify"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OktaVerify { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}.

---

##### `OnpremMfa`<sup>Optional</sup> <a name="OnpremMfa" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.onpremMfa"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> OnpremMfa { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}.

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.phoneNumber"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PhoneNumber { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}.

---

##### `RsaToken`<sup>Optional</sup> <a name="RsaToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.rsaToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RsaToken { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}.

---

##### `SecurityQuestion`<sup>Optional</sup> <a name="SecurityQuestion" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.securityQuestion"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SecurityQuestion { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}.

---

##### `SymantecVip`<sup>Optional</sup> <a name="SymantecVip" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.symantecVip"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> SymantecVip { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}.

---

##### `Webauthn`<sup>Optional</sup> <a name="Webauthn" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.webauthn"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Webauthn { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}.

---

##### `YubikeyToken`<sup>Optional</sup> <a name="YubikeyToken" id="@cdktf/provider-okta.policyMfaDefault.PolicyMfaDefaultConfig.property.yubikeyToken"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> YubikeyToken { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.1.0/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}.

---



