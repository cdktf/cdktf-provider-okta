# `okta_password_policy_rule`

Refer to the Terraform Registory for docs: [`okta_password_policy_rule`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule).

# `passwordPolicyRule` Submodule <a name="`passwordPolicyRule` Submodule" id="@cdktf/provider-okta.passwordPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PasswordPolicyRule <a name="PasswordPolicyRule" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule okta_password_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PasswordPolicyRule(Construct Scope, string Id, PasswordPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig">PasswordPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig">PasswordPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection">ResetNetworkConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes">ResetNetworkExcludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes">ResetNetworkIncludes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange">ResetPasswordChange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset">ResetPasswordReset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock">ResetPasswordUnlock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid">ResetPolicyid</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId">ResetPolicyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded">ResetUsersExcluded</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetNetworkConnection` <a name="ResetNetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkConnection"></a>

```csharp
private void ResetNetworkConnection()
```

##### `ResetNetworkExcludes` <a name="ResetNetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkExcludes"></a>

```csharp
private void ResetNetworkExcludes()
```

##### `ResetNetworkIncludes` <a name="ResetNetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetNetworkIncludes"></a>

```csharp
private void ResetNetworkIncludes()
```

##### `ResetPasswordChange` <a name="ResetPasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordChange"></a>

```csharp
private void ResetPasswordChange()
```

##### `ResetPasswordReset` <a name="ResetPasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordReset"></a>

```csharp
private void ResetPasswordReset()
```

##### `ResetPasswordUnlock` <a name="ResetPasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPasswordUnlock"></a>

```csharp
private void ResetPasswordUnlock()
```

##### `ResetPolicyid` <a name="ResetPolicyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyid"></a>

```csharp
private void ResetPolicyid()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetPriority"></a>

```csharp
private void ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetUsersExcluded` <a name="ResetUsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.resetUsersExcluded"></a>

```csharp
private void ResetUsersExcluded()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PasswordPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PasswordPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

PasswordPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput">NetworkConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput">NetworkExcludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput">NetworkIncludesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput">PasswordChangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput">PasswordResetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput">PasswordUnlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput">PolicyidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput">UsersExcludedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection">NetworkConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes">NetworkExcludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes">NetworkIncludes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange">PasswordChange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset">PasswordReset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock">PasswordUnlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid">Policyid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkConnectionInput`<sup>Optional</sup> <a name="NetworkConnectionInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnectionInput"></a>

```csharp
public string NetworkConnectionInput { get; }
```

- *Type:* string

---

##### `NetworkExcludesInput`<sup>Optional</sup> <a name="NetworkExcludesInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludesInput"></a>

```csharp
public string[] NetworkExcludesInput { get; }
```

- *Type:* string[]

---

##### `NetworkIncludesInput`<sup>Optional</sup> <a name="NetworkIncludesInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludesInput"></a>

```csharp
public string[] NetworkIncludesInput { get; }
```

- *Type:* string[]

---

##### `PasswordChangeInput`<sup>Optional</sup> <a name="PasswordChangeInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChangeInput"></a>

```csharp
public string PasswordChangeInput { get; }
```

- *Type:* string

---

##### `PasswordResetInput`<sup>Optional</sup> <a name="PasswordResetInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordResetInput"></a>

```csharp
public string PasswordResetInput { get; }
```

- *Type:* string

---

##### `PasswordUnlockInput`<sup>Optional</sup> <a name="PasswordUnlockInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlockInput"></a>

```csharp
public string PasswordUnlockInput { get; }
```

- *Type:* string

---

##### `PolicyidInput`<sup>Optional</sup> <a name="PolicyidInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyidInput"></a>

```csharp
public string PolicyidInput { get; }
```

- *Type:* string

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `UsersExcludedInput`<sup>Optional</sup> <a name="UsersExcludedInput" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcludedInput"></a>

```csharp
public string[] UsersExcludedInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConnection`<sup>Required</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkConnection"></a>

```csharp
public string NetworkConnection { get; }
```

- *Type:* string

---

##### `NetworkExcludes`<sup>Required</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkExcludes"></a>

```csharp
public string[] NetworkExcludes { get; }
```

- *Type:* string[]

---

##### `NetworkIncludes`<sup>Required</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.networkIncludes"></a>

```csharp
public string[] NetworkIncludes { get; }
```

- *Type:* string[]

---

##### `PasswordChange`<sup>Required</sup> <a name="PasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordChange"></a>

```csharp
public string PasswordChange { get; }
```

- *Type:* string

---

##### `PasswordReset`<sup>Required</sup> <a name="PasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordReset"></a>

```csharp
public string PasswordReset { get; }
```

- *Type:* string

---

##### `PasswordUnlock`<sup>Required</sup> <a name="PasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.passwordUnlock"></a>

```csharp
public string PasswordUnlock { get; }
```

- *Type:* string

---

##### `Policyid`<sup>Required</sup> <a name="Policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyid"></a>

```csharp
public string Policyid { get; }
```

- *Type:* string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `UsersExcluded`<sup>Required</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PasswordPolicyRuleConfig <a name="PasswordPolicyRuleConfig" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new PasswordPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string NetworkConnection = null,
    string[] NetworkExcludes = null,
    string[] NetworkIncludes = null,
    string PasswordChange = null,
    string PasswordReset = null,
    string PasswordUnlock = null,
    string Policyid = null,
    string PolicyId = null,
    double Priority = null,
    string Status = null,
    string[] UsersExcluded = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name">Name</a></code> | <code>string</code> | Policy Rule Name. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#id PasswordPolicyRule#id}. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection">NetworkConnection</a></code> | <code>string</code> | Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes">NetworkExcludes</a></code> | <code>string[]</code> | The zones to exclude. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes">NetworkIncludes</a></code> | <code>string[]</code> | The zones to include. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange">PasswordChange</a></code> | <code>string</code> | Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset">PasswordReset</a></code> | <code>string</code> | Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock">PasswordUnlock</a></code> | <code>string</code> | Allow or deny a user to unlock. Default = DENY. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid">Policyid</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Policy ID of the Rule. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | Policy Rule Priority, this attribute can be set to a valid priority. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status">Status</a></code> | <code>string</code> | Policy Rule Status: ACTIVE or INACTIVE. |
| <code><a href="#@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded">UsersExcluded</a></code> | <code>string[]</code> | Set of User IDs to Exclude. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Policy Rule Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#name PasswordPolicyRule#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#id PasswordPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkConnection`<sup>Optional</sup> <a name="NetworkConnection" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkConnection"></a>

```csharp
public string NetworkConnection { get; set; }
```

- *Type:* string

Network selection mode: ANYWHERE, ZONE, ON_NETWORK, or OFF_NETWORK.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#network_connection PasswordPolicyRule#network_connection}

---

##### `NetworkExcludes`<sup>Optional</sup> <a name="NetworkExcludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkExcludes"></a>

```csharp
public string[] NetworkExcludes { get; set; }
```

- *Type:* string[]

The zones to exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#network_excludes PasswordPolicyRule#network_excludes}

---

##### `NetworkIncludes`<sup>Optional</sup> <a name="NetworkIncludes" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.networkIncludes"></a>

```csharp
public string[] NetworkIncludes { get; set; }
```

- *Type:* string[]

The zones to include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#network_includes PasswordPolicyRule#network_includes}

---

##### `PasswordChange`<sup>Optional</sup> <a name="PasswordChange" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordChange"></a>

```csharp
public string PasswordChange { get; set; }
```

- *Type:* string

Allow or deny a user to change their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#password_change PasswordPolicyRule#password_change}

---

##### `PasswordReset`<sup>Optional</sup> <a name="PasswordReset" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordReset"></a>

```csharp
public string PasswordReset { get; set; }
```

- *Type:* string

Allow or deny a user to reset their password: ALLOW or DENY. Default = ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#password_reset PasswordPolicyRule#password_reset}

---

##### `PasswordUnlock`<sup>Optional</sup> <a name="PasswordUnlock" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.passwordUnlock"></a>

```csharp
public string PasswordUnlock { get; set; }
```

- *Type:* string

Allow or deny a user to unlock. Default = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#password_unlock PasswordPolicyRule#password_unlock}

---

##### `Policyid`<sup>Optional</sup> <a name="Policyid" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyid"></a>

```csharp
public string Policyid { get; set; }
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#policyid PasswordPolicyRule#policyid}

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Policy ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#policy_id PasswordPolicyRule#policy_id}

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Policy Rule Priority, this attribute can be set to a valid priority.

To avoid endless diff situation we error if an invalid priority is provided. API defaults it to the last (lowest) if not there.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#priority PasswordPolicyRule#priority}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Policy Rule Status: ACTIVE or INACTIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#status PasswordPolicyRule#status}

---

##### `UsersExcluded`<sup>Optional</sup> <a name="UsersExcluded" id="@cdktf/provider-okta.passwordPolicyRule.PasswordPolicyRuleConfig.property.usersExcluded"></a>

```csharp
public string[] UsersExcluded { get; set; }
```

- *Type:* string[]

Set of User IDs to Exclude.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/password_policy_rule#users_excluded PasswordPolicyRule#users_excluded}

---



