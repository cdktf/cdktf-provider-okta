# `okta_policy_rule_signon`

Refer to the Terraform Registory for docs: [`okta_policy_rule_signon`](https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon).

# `policyRuleSignon` Submodule <a name="`policyRuleSignon` Submodule" id="@cdktf/provider-okta.policyRuleSignon"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicyRuleSignon <a name="PolicyRuleSignon" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon okta_policy_rule_signon}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignon(Construct Scope, string Id, PolicyRuleSignonConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig">PolicyRuleSignonConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig">PolicyRuleSignonConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence">PutFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess">ResetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype">ResetAuthtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors">ResetBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence">ResetFactorSequence</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider">ResetIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds">ResetIdentityProviderIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime">ResetMfaLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt">ResetMfaPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice">ResetMfaRememberDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired">ResetMfaRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor">ResetPrimaryFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel">ResetRiscLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle">ResetSessionIdle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime">ResetSessionLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent">ResetSessionPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFactorSequence` <a name="PutFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence"></a>

```csharp
private void PutFactorSequence(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.putFactorSequence.parameter.value"></a>

- *Type:* object

---

##### `ResetAccess` <a name="ResetAccess" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAccess"></a>

```csharp
private void ResetAccess()
```

##### `ResetAuthtype` <a name="ResetAuthtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetAuthtype"></a>

```csharp
private void ResetAuthtype()
```

##### `ResetBehaviors` <a name="ResetBehaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetBehaviors"></a>

```csharp
private void ResetBehaviors()
```

##### `ResetFactorSequence` <a name="ResetFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetFactorSequence"></a>

```csharp
private void ResetFactorSequence()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdentityProvider` <a name="ResetIdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProvider"></a>

```csharp
private void ResetIdentityProvider()
```

##### `ResetIdentityProviderIds` <a name="ResetIdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetIdentityProviderIds"></a>

```csharp
private void ResetIdentityProviderIds()
```

##### `ResetMfaLifetime` <a name="ResetMfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaLifetime"></a>

```csharp
private void ResetMfaLifetime()
```

##### `ResetMfaPrompt` <a name="ResetMfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaPrompt"></a>

```csharp
private void ResetMfaPrompt()
```

##### `ResetMfaRememberDevice` <a name="ResetMfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRememberDevice"></a>

```csharp
private void ResetMfaRememberDevice()
```

##### `ResetMfaRequired` <a name="ResetMfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetMfaRequired"></a>

```csharp
private void ResetMfaRequired()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkConnection"></a>

```csharp
private void ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkExcludes"></a>

```csharp
private void ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetNetworkIncludes"></a>

```csharp
private void ResetNetworkIncludes()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetPrimaryFactor` <a name="ResetPrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPrimaryFactor"></a>

```csharp
private void ResetPrimaryFactor()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetRiscLevel` <a name="ResetRiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetRiscLevel"></a>

```csharp
private void ResetRiscLevel()
```

##### `ResetSessionIdle` <a name="ResetSessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionIdle"></a>

```csharp
private void ResetSessionIdle()
```

##### `ResetSessionLifetime` <a name="ResetSessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionLifetime"></a>

```csharp
private void ResetSessionLifetime()
```

##### `ResetSessionPersistent` <a name="ResetSessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetSessionPersistent"></a>

```csharp
private void ResetSessionPersistent()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.resetUsersExcluded"></a>

```csharp
private void ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyRuleSignon.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyRuleSignon.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PolicyRuleSignon.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence">FactorSequence</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput">AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput">AuthtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput">BehaviorsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput">FactorSequenceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput">IdentityProviderIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput">IdentityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput">MfaLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput">MfaPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput">MfaRememberDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput">MfaRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput">PrimaryFactorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput">RiscLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput">SessionIdleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput">SessionLifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput">SessionPersistentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access">Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype">Authtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors">Behaviors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds">IdentityProviderIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime">MfaLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt">MfaPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice">MfaRememberDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired">MfaRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection">NetworkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes">NetworkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes">NetworkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor">PrimaryFactor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel">RiscLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle">SessionIdle</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime">SessionLifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent">SessionPersistent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `FactorSequence`<sup>Required</sup> <a name="FactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequence"></a>

```csharp
public PolicyRuleSignonFactorSequenceList FactorSequence { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList">PolicyRuleSignonFactorSequenceList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.accessInput"></a>

```csharp
public string AccessInput { get; }
```

- *Type:* string

---

##### `AuthtypeInput`<sup>Optional</sup> <a name="AuthtypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtypeInput"></a>

```csharp
public string AuthtypeInput { get; }
```

- *Type:* string

---

##### `BehaviorsInput`<sup>Optional</sup> <a name="BehaviorsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviorsInput"></a>

```csharp
public string[] BehaviorsInput { get; }
```

- *Type:* string[]

---

##### `FactorSequenceInput`<sup>Optional</sup> <a name="FactorSequenceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.factorSequenceInput"></a>

```csharp
public object FactorSequenceInput { get; }
```

- *Type:* object

---

##### `IdentityProviderIdsInput`<sup>Optional</sup> <a name="IdentityProviderIdsInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIdsInput"></a>

```csharp
public string[] IdentityProviderIdsInput { get; }
```

- *Type:* string[]

---

##### `IdentityProviderInput`<sup>Optional</sup> <a name="IdentityProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderInput"></a>

```csharp
public string IdentityProviderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MfaLifetimeInput`<sup>Optional</sup> <a name="MfaLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetimeInput"></a>

```csharp
public double MfaLifetimeInput { get; }
```

- *Type:* double

---

##### `MfaPromptInput`<sup>Optional</sup> <a name="MfaPromptInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPromptInput"></a>

```csharp
public string MfaPromptInput { get; }
```

- *Type:* string

---

##### `MfaRememberDeviceInput`<sup>Optional</sup> <a name="MfaRememberDeviceInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDeviceInput"></a>

```csharp
public object MfaRememberDeviceInput { get; }
```

- *Type:* object

---

##### `MfaRequiredInput`<sup>Optional</sup> <a name="MfaRequiredInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequiredInput"></a>

```csharp
public object MfaRequiredInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnectionInput"></a>

```csharp
public string NetworkConnectionInput { get; }
```

- *Type:* string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludesInput"></a>

```csharp
public string[] NetworkExcludesInput { get; }
```

- *Type:* string[]

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludesInput"></a>

```csharp
public string[] NetworkIncludesInput { get; }
```

- *Type:* string[]

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PrimaryFactorInput`<sup>Optional</sup> <a name="PrimaryFactorInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactorInput"></a>

```csharp
public string PrimaryFactorInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RiscLevelInput`<sup>Optional</sup> <a name="RiscLevelInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevelInput"></a>

```csharp
public string RiscLevelInput { get; }
```

- *Type:* string

---

##### `SessionIdleInput`<sup>Optional</sup> <a name="SessionIdleInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdleInput"></a>

```csharp
public double SessionIdleInput { get; }
```

- *Type:* double

---

##### `SessionLifetimeInput`<sup>Optional</sup> <a name="SessionLifetimeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetimeInput"></a>

```csharp
public double SessionLifetimeInput { get; }
```

- *Type:* double

---

##### `SessionPersistentInput`<sup>Optional</sup> <a name="SessionPersistentInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistentInput"></a>

```csharp
public object SessionPersistentInput { get; }
```

- *Type:* object

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcludedInput"></a>

```csharp
public string[] UsersExcludedInput { get; }
```

- *Type:* string[]

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.access"></a>

```csharp
public string Access { get; }
```

- *Type:* string

---

##### `Authtype`<sup>Required</sup> <a name="Authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.authtype"></a>

```csharp
public string Authtype { get; }
```

- *Type:* string

---

##### `Behaviors`<sup>Required</sup> <a name="Behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.behaviors"></a>

```csharp
public string[] Behaviors { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdentityProvider`<sup>Required</sup> <a name="IdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; }
```

- *Type:* string

---

##### `IdentityProviderIds`<sup>Required</sup> <a name="IdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.identityProviderIds"></a>

```csharp
public string[] IdentityProviderIds { get; }
```

- *Type:* string[]

---

##### `MfaLifetime`<sup>Required</sup> <a name="MfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaLifetime"></a>

```csharp
public double MfaLifetime { get; }
```

- *Type:* double

---

##### `MfaPrompt`<sup>Required</sup> <a name="MfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaPrompt"></a>

```csharp
public string MfaPrompt { get; }
```

- *Type:* string

---

##### `MfaRememberDevice`<sup>Required</sup> <a name="MfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRememberDevice"></a>

```csharp
public object MfaRememberDevice { get; }
```

- *Type:* object

---

##### `MfaRequired`<sup>Required</sup> <a name="MfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.mfaRequired"></a>

```csharp
public object MfaRequired { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkConnection"></a>

```csharp
public string NetworkConnection { get; }
```

- *Type:* string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkExcludes"></a>

```csharp
public string[] NetworkExcludes { get; }
```

- *Type:* string[]

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.networkIncludes"></a>

```csharp
public string[] NetworkIncludes { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `PrimaryFactor`<sup>Required</sup> <a name="PrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.primaryFactor"></a>

```csharp
public string PrimaryFactor { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `RiscLevel`<sup>Required</sup> <a name="RiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.riscLevel"></a>

```csharp
public string RiscLevel { get; }
```

- *Type:* string

---

##### `SessionIdle`<sup>Required</sup> <a name="SessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionIdle"></a>

```csharp
public double SessionIdle { get; }
```

- *Type:* double

---

##### `SessionLifetime`<sup>Required</sup> <a name="SessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionLifetime"></a>

```csharp
public double SessionLifetime { get; }
```

- *Type:* double

---

##### `SessionPersistent`<sup>Required</sup> <a name="SessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.sessionPersistent"></a>

```csharp
public object SessionPersistent { get; }
```

- *Type:* object

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignon.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicyRuleSignonConfig <a name="PolicyRuleSignonConfig" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Access = null,
    string Authtype = null,
    string[] Behaviors = null,
    object FactorSequence = null,
    string Id = null,
    string IdentityProvider = null,
    string[] IdentityProviderIds = null,
    double MfaLifetime = null,
    string MfaPrompt = null,
    object MfaRememberDevice = null,
    object MfaRequired = null,
    string NetworkConnection = null,
    string[] NetworkExcludes = null,
    string[] NetworkIncludes = null,
    string PolicyId = null,
    string PrimaryFactor = null,
    double Priority = null,
    string RiscLevel = null,
    double SessionIdle = null,
    double SessionLifetime = null,
    object SessionPersistent = null,
    string Status = null,
    string[] UsersExcluded = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name">Name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access">Access</a></code> | <code>string</code> | Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype">Authtype</a></code> | <code>string</code> | Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors">Behaviors</a></code> | <code>string[]</code> | List of behavior IDs. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence">FactorSequence</a></code> | <code>object</code> | factor_sequence block. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider">IdentityProvider</a></code> | <code>string</code> | Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds">IdentityProviderIds</a></code> | <code>string[]</code> | When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime">MfaLifetime</a></code> | <code>double</code> | Elapsed time before the next MFA challenge. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt">MfaPrompt</a></code> | <code>string</code> | Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice">MfaRememberDevice</a></code> | <code>object</code> | Remember MFA device. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired">MfaRequired</a></code> | <code>object</code> | Require MFA. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection">NetworkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor">PrimaryFactor</a></code> | <code>string</code> | Primary factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority">Priority</a></code> | <code>double</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel">RiscLevel</a></code> | <code>string</code> | Risc level: ANY, LOW, MEDIUM or HIGH. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle">SessionIdle</a></code> | <code>double</code> | Max minutes a session can be idle. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime">SessionLifetime</a></code> | <code>double</code> | Max minutes a session is active: Disable = 0. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent">SessionPersistent</a></code> | <code>object</code> | Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status">Status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}

---

##### `Access`<sup>Optional</sup> <a name="Access" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.access"></a>

```csharp
public string Access { get; set; }
```

- *Type:* string

Allow or deny access based on the rule conditions: ALLOW, DENY or CHALLENGE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}

---

##### `Authtype`<sup>Optional</sup> <a name="Authtype" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.authtype"></a>

```csharp
public string Authtype { get; set; }
```

- *Type:* string

Authentication entrypoint: ANY, RADIUS or LDAP_INTERFACE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}

---

##### `Behaviors`<sup>Optional</sup> <a name="Behaviors" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.behaviors"></a>

```csharp
public string[] Behaviors { get; set; }
```

- *Type:* string[]

List of behavior IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}

---

##### `FactorSequence`<sup>Optional</sup> <a name="FactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.factorSequence"></a>

```csharp
public object FactorSequence { get; set; }
```

- *Type:* object

factor_sequence block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdentityProvider`<sup>Optional</sup> <a name="IdentityProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProvider"></a>

```csharp
public string IdentityProvider { get; set; }
```

- *Type:* string

Apply rule based on the IdP used: ANY, OKTA or SPECIFIC_IDP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}

---

##### `IdentityProviderIds`<sup>Optional</sup> <a name="IdentityProviderIds" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.identityProviderIds"></a>

```csharp
public string[] IdentityProviderIds { get; set; }
```

- *Type:* string[]

When identity_provider is SPECIFIC_IDP then this is the list of IdP IDs to apply the rule on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}

---

##### `MfaLifetime`<sup>Optional</sup> <a name="MfaLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaLifetime"></a>

```csharp
public double MfaLifetime { get; set; }
```

- *Type:* double

Elapsed time before the next MFA challenge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}

---

##### `MfaPrompt`<sup>Optional</sup> <a name="MfaPrompt" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaPrompt"></a>

```csharp
public string MfaPrompt { get; set; }
```

- *Type:* string

Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: DEVICE, SESSION or ALWAYS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}

---

##### `MfaRememberDevice`<sup>Optional</sup> <a name="MfaRememberDevice" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRememberDevice"></a>

```csharp
public object MfaRememberDevice { get; set; }
```

- *Type:* object

Remember MFA device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}

---

##### `MfaRequired`<sup>Optional</sup> <a name="MfaRequired" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.mfaRequired"></a>

```csharp
public object MfaRequired { get; set; }
```

- *Type:* object

Require MFA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkConnection"></a>

```csharp
public string NetworkConnection { get; set; }
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkExcludes"></a>

```csharp
public string[] NetworkExcludes { get; set; }
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.networkIncludes"></a>

```csharp
public string[] NetworkIncludes { get; set; }
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}

---

##### `PrimaryFactor`<sup>Optional</sup> <a name="PrimaryFactor" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.primaryFactor"></a>

```csharp
public string PrimaryFactor { get; set; }
```

- *Type:* string

Primary factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}

---

##### `RiscLevel`<sup>Optional</sup> <a name="RiscLevel" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.riscLevel"></a>

```csharp
public string RiscLevel { get; set; }
```

- *Type:* string

Risc level: ANY, LOW, MEDIUM or HIGH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}

---

##### `SessionIdle`<sup>Optional</sup> <a name="SessionIdle" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionIdle"></a>

```csharp
public double SessionIdle { get; set; }
```

- *Type:* double

Max minutes a session can be idle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}

---

##### `SessionLifetime`<sup>Optional</sup> <a name="SessionLifetime" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionLifetime"></a>

```csharp
public double SessionLifetime { get; set; }
```

- *Type:* double

Max minutes a session is active: Disable = 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}

---

##### `SessionPersistent`<sup>Optional</sup> <a name="SessionPersistent" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.sessionPersistent"></a>

```csharp
public object SessionPersistent { get; set; }
```

- *Type:* object

Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonConfig.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; set; }
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}

---

### PolicyRuleSignonFactorSequence <a name="PolicyRuleSignonFactorSequence" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonFactorSequence {
    string PrimaryCriteriaFactorType,
    string PrimaryCriteriaProvider,
    object SecondaryCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType">PrimaryCriteriaFactorType</a></code> | <code>string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider">PrimaryCriteriaProvider</a></code> | <code>string</code> | Factor provider. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria">SecondaryCriteria</a></code> | <code>object</code> | secondary_criteria block. |

---

##### `PrimaryCriteriaFactorType`<sup>Required</sup> <a name="PrimaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaFactorType"></a>

```csharp
public string PrimaryCriteriaFactorType { get; set; }
```

- *Type:* string

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#primary_criteria_factor_type PolicyRuleSignon#primary_criteria_factor_type}

---

##### `PrimaryCriteriaProvider`<sup>Required</sup> <a name="PrimaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.primaryCriteriaProvider"></a>

```csharp
public string PrimaryCriteriaProvider { get; set; }
```

- *Type:* string

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#primary_criteria_provider PolicyRuleSignon#primary_criteria_provider}

---

##### `SecondaryCriteria`<sup>Optional</sup> <a name="SecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequence.property.secondaryCriteria"></a>

```csharp
public object SecondaryCriteria { get; set; }
```

- *Type:* object

secondary_criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#secondary_criteria PolicyRuleSignon#secondary_criteria}

---

### PolicyRuleSignonFactorSequenceSecondaryCriteria <a name="PolicyRuleSignonFactorSequenceSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonFactorSequenceSecondaryCriteria {
    string FactorType,
    string Provider
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType">FactorType</a></code> | <code>string</code> | Type of a Factor. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider">Provider</a></code> | <code>string</code> | Factor provider. |

---

##### `FactorType`<sup>Required</sup> <a name="FactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.factorType"></a>

```csharp
public string FactorType { get; set; }
```

- *Type:* string

Type of a Factor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#factor_type PolicyRuleSignon#factor_type}

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteria.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Factor provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.0.0/docs/resources/policy_rule_signon#provider PolicyRuleSignon#provider}

---

## Classes <a name="Classes" id="Classes"></a>

### PolicyRuleSignonFactorSequenceList <a name="PolicyRuleSignonFactorSequenceList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonFactorSequenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get"></a>

```csharp
private PolicyRuleSignonFactorSequenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicyRuleSignonFactorSequenceOutputReference <a name="PolicyRuleSignonFactorSequenceOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonFactorSequenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria">PutSecondaryCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria">ResetSecondaryCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecondaryCriteria` <a name="PutSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria"></a>

```csharp
private void PutSecondaryCriteria(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.putSecondaryCriteria.parameter.value"></a>

- *Type:* object

---

##### `ResetSecondaryCriteria` <a name="ResetSecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.resetSecondaryCriteria"></a>

```csharp
private void ResetSecondaryCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria">SecondaryCriteria</a></code> | <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput">PrimaryCriteriaFactorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput">PrimaryCriteriaProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput">SecondaryCriteriaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType">PrimaryCriteriaFactorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider">PrimaryCriteriaProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecondaryCriteria`<sup>Required</sup> <a name="SecondaryCriteria" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteria"></a>

```csharp
public PolicyRuleSignonFactorSequenceSecondaryCriteriaList SecondaryCriteria { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList">PolicyRuleSignonFactorSequenceSecondaryCriteriaList</a>

---

##### `PrimaryCriteriaFactorTypeInput`<sup>Optional</sup> <a name="PrimaryCriteriaFactorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorTypeInput"></a>

```csharp
public string PrimaryCriteriaFactorTypeInput { get; }
```

- *Type:* string

---

##### `PrimaryCriteriaProviderInput`<sup>Optional</sup> <a name="PrimaryCriteriaProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProviderInput"></a>

```csharp
public string PrimaryCriteriaProviderInput { get; }
```

- *Type:* string

---

##### `SecondaryCriteriaInput`<sup>Optional</sup> <a name="SecondaryCriteriaInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.secondaryCriteriaInput"></a>

```csharp
public object SecondaryCriteriaInput { get; }
```

- *Type:* object

---

##### `PrimaryCriteriaFactorType`<sup>Required</sup> <a name="PrimaryCriteriaFactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaFactorType"></a>

```csharp
public string PrimaryCriteriaFactorType { get; }
```

- *Type:* string

---

##### `PrimaryCriteriaProvider`<sup>Required</sup> <a name="PrimaryCriteriaProvider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.primaryCriteriaProvider"></a>

```csharp
public string PrimaryCriteriaProvider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaList <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaList" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonFactorSequenceSecondaryCriteriaList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get"></a>

```csharp
private PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference <a name="PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput">FactorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType">FactorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FactorTypeInput`<sup>Optional</sup> <a name="FactorTypeInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorTypeInput"></a>

```csharp
public string FactorTypeInput { get; }
```

- *Type:* string

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `FactorType`<sup>Required</sup> <a name="FactorType" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.factorType"></a>

```csharp
public string FactorType { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.policyRuleSignon.PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



