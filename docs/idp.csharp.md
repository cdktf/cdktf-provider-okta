# `idp` Submodule <a name="`idp` Submodule" id="@cdktf/provider-okta.idp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Idp <a name="Idp" id="@cdktf/provider-okta.idp.Idp"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/idp okta_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.idp.Idp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new Idp(Construct Scope, string Id, IdpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.idp.IdpConfig">IdpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.idp.Idp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.idp.IdpConfig">IdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm">ResetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope">ResetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoBinding">ResetUserInfoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUserInfoUrl">ResetUserInfoUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.idp.Idp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.idp.Idp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.idp.Idp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.idp.Idp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.idp.Idp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.idp.Idp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.idp.Idp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.idp.Idp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkAction"></a>

```csharp
private void ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.resetAccountLinkGroupInclude"></a>

```csharp
private void ResetAccountLinkGroupInclude()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.idp.Idp.resetDeprovisionedAction"></a>

```csharp
private void ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.idp.Idp.resetGroupsAction"></a>

```csharp
private void ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.idp.Idp.resetGroupsAssignment"></a>

```csharp
private void ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.idp.Idp.resetGroupsAttribute"></a>

```csharp
private void ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.idp.Idp.resetGroupsFilter"></a>

```csharp
private void ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.idp.Idp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.idp.Idp.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.idp.Idp.resetMaxClockSkew"></a>

```csharp
private void ResetMaxClockSkew()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.idp.Idp.resetProfileMaster"></a>

```csharp
private void ResetProfileMaster()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktf/provider-okta.idp.Idp.resetProtocolType"></a>

```csharp
private void ResetProtocolType()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.idp.Idp.resetProvisioningAction"></a>

```csharp
private void ResetProvisioningAction()
```

##### `ResetRequestSignatureAlgorithm` <a name="ResetRequestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureAlgorithm"></a>

```csharp
private void ResetRequestSignatureAlgorithm()
```

##### `ResetRequestSignatureScope` <a name="ResetRequestSignatureScope" id="@cdktf/provider-okta.idp.Idp.resetRequestSignatureScope"></a>

```csharp
private void ResetRequestSignatureScope()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.idp.Idp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchAttribute"></a>

```csharp
private void ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.idp.Idp.resetSubjectMatchType"></a>

```csharp
private void ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.idp.Idp.resetSuspendedAction"></a>

```csharp
private void ResetSuspendedAction()
```

##### `ResetUserInfoBinding` <a name="ResetUserInfoBinding" id="@cdktf/provider-okta.idp.Idp.resetUserInfoBinding"></a>

```csharp
private void ResetUserInfoBinding()
```

##### `ResetUserInfoUrl` <a name="ResetUserInfoUrl" id="@cdktf/provider-okta.idp.Idp.resetUserInfoUrl"></a>

```csharp
private void ResetUserInfoUrl()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.idp.Idp.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.idp.Idp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Idp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idp.Idp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.idp.Idp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Idp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idp.Idp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.idp.Idp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

Idp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.idp.Idp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userTypeId">UserTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput">AuthorizationBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput">AuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsActionInput">GroupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrlInput">IssuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBindingInput">JwksBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrlInput">JwksUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMasterInput">ProfileMasterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput">RequestSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput">RequestSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBindingInput">TokenBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrlInput">TokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput">UserInfoBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput">UserInfoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAction">GroupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksBinding">JwksBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoBinding">UserInfoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.userInfoUrl">UserInfoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.idp.Idp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.idp.Idp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.idp.Idp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.idp.Idp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.idp.Idp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.idp.Idp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.idp.Idp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idp.Idp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idp.Idp.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idp.Idp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idp.Idp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idp.Idp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idp.Idp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idp.Idp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.idp.Idp.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserTypeId`<sup>Required</sup> <a name="UserTypeId" id="@cdktf/provider-okta.idp.Idp.property.userTypeId"></a>

```csharp
public string UserTypeId { get; }
```

- *Type:* string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.idp.Idp.property.accountLinkActionInput"></a>

```csharp
public string AccountLinkActionInput { get; }
```

- *Type:* string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupIncludeInput"></a>

```csharp
public string[] AccountLinkGroupIncludeInput { get; }
```

- *Type:* string[]

---

##### `AuthorizationBindingInput`<sup>Optional</sup> <a name="AuthorizationBindingInput" id="@cdktf/provider-okta.idp.Idp.property.authorizationBindingInput"></a>

```csharp
public string AuthorizationBindingInput { get; }
```

- *Type:* string

---

##### `AuthorizationUrlInput`<sup>Optional</sup> <a name="AuthorizationUrlInput" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrlInput"></a>

```csharp
public string AuthorizationUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-okta.idp.Idp.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-okta.idp.Idp.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedActionInput"></a>

```csharp
public string DeprovisionedActionInput { get; }
```

- *Type:* string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.idp.Idp.property.groupsActionInput"></a>

```csharp
public string GroupsActionInput { get; }
```

- *Type:* string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignmentInput"></a>

```csharp
public string[] GroupsAssignmentInput { get; }
```

- *Type:* string[]

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.idp.Idp.property.groupsAttributeInput"></a>

```csharp
public string GroupsAttributeInput { get; }
```

- *Type:* string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.idp.Idp.property.groupsFilterInput"></a>

```csharp
public string[] GroupsFilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.idp.Idp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.idp.Idp.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `IssuerUrlInput`<sup>Optional</sup> <a name="IssuerUrlInput" id="@cdktf/provider-okta.idp.Idp.property.issuerUrlInput"></a>

```csharp
public string IssuerUrlInput { get; }
```

- *Type:* string

---

##### `JwksBindingInput`<sup>Optional</sup> <a name="JwksBindingInput" id="@cdktf/provider-okta.idp.Idp.property.jwksBindingInput"></a>

```csharp
public string JwksBindingInput { get; }
```

- *Type:* string

---

##### `JwksUrlInput`<sup>Optional</sup> <a name="JwksUrlInput" id="@cdktf/provider-okta.idp.Idp.property.jwksUrlInput"></a>

```csharp
public string JwksUrlInput { get; }
```

- *Type:* string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkewInput"></a>

```csharp
public double MaxClockSkewInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.idp.Idp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.idp.Idp.property.profileMasterInput"></a>

```csharp
public object ProfileMasterInput { get; }
```

- *Type:* object

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktf/provider-okta.idp.Idp.property.protocolTypeInput"></a>

```csharp
public string ProtocolTypeInput { get; }
```

- *Type:* string

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.idp.Idp.property.provisioningActionInput"></a>

```csharp
public string ProvisioningActionInput { get; }
```

- *Type:* string

---

##### `RequestSignatureAlgorithmInput`<sup>Optional</sup> <a name="RequestSignatureAlgorithmInput" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithmInput"></a>

```csharp
public string RequestSignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `RequestSignatureScopeInput`<sup>Optional</sup> <a name="RequestSignatureScopeInput" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScopeInput"></a>

```csharp
public string RequestSignatureScopeInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-okta.idp.Idp.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.idp.Idp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttributeInput"></a>

```csharp
public string SubjectMatchAttributeInput { get; }
```

- *Type:* string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchTypeInput"></a>

```csharp
public string SubjectMatchTypeInput { get; }
```

- *Type:* string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.idp.Idp.property.suspendedActionInput"></a>

```csharp
public string SuspendedActionInput { get; }
```

- *Type:* string

---

##### `TokenBindingInput`<sup>Optional</sup> <a name="TokenBindingInput" id="@cdktf/provider-okta.idp.Idp.property.tokenBindingInput"></a>

```csharp
public string TokenBindingInput { get; }
```

- *Type:* string

---

##### `TokenUrlInput`<sup>Optional</sup> <a name="TokenUrlInput" id="@cdktf/provider-okta.idp.Idp.property.tokenUrlInput"></a>

```csharp
public string TokenUrlInput { get; }
```

- *Type:* string

---

##### `UserInfoBindingInput`<sup>Optional</sup> <a name="UserInfoBindingInput" id="@cdktf/provider-okta.idp.Idp.property.userInfoBindingInput"></a>

```csharp
public string UserInfoBindingInput { get; }
```

- *Type:* string

---

##### `UserInfoUrlInput`<sup>Optional</sup> <a name="UserInfoUrlInput" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrlInput"></a>

```csharp
public string UserInfoUrlInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idp.Idp.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; }
```

- *Type:* string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idp.Idp.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; }
```

- *Type:* string[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idp.Idp.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idp.Idp.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idp.Idp.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idp.Idp.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idp.Idp.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; }
```

- *Type:* string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idp.Idp.property.groupsAction"></a>

```csharp
public string GroupsAction { get; }
```

- *Type:* string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idp.Idp.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; }
```

- *Type:* string[]

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idp.Idp.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; }
```

- *Type:* string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idp.Idp.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.idp.Idp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idp.Idp.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-okta.idp.Idp.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; }
```

- *Type:* string

---

##### `JwksBinding`<sup>Required</sup> <a name="JwksBinding" id="@cdktf/provider-okta.idp.Idp.property.jwksBinding"></a>

```csharp
public string JwksBinding { get; }
```

- *Type:* string

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-okta.idp.Idp.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idp.Idp.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idp.Idp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idp.Idp.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; }
```

- *Type:* object

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idp.Idp.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idp.Idp.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `RequestSignatureAlgorithm`<sup>Required</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureAlgorithm"></a>

```csharp
public string RequestSignatureAlgorithm { get; }
```

- *Type:* string

---

##### `RequestSignatureScope`<sup>Required</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idp.Idp.property.requestSignatureScope"></a>

```csharp
public string RequestSignatureScope { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idp.Idp.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.idp.Idp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; }
```

- *Type:* string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idp.Idp.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; }
```

- *Type:* string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idp.Idp.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; }
```

- *Type:* string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idp.Idp.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idp.Idp.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `UserInfoBinding`<sup>Required</sup> <a name="UserInfoBinding" id="@cdktf/provider-okta.idp.Idp.property.userInfoBinding"></a>

```csharp
public string UserInfoBinding { get; }
```

- *Type:* string

---

##### `UserInfoUrl`<sup>Required</sup> <a name="UserInfoUrl" id="@cdktf/provider-okta.idp.Idp.property.userInfoUrl"></a>

```csharp
public string UserInfoUrl { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idp.Idp.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.Idp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.idp.Idp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdpConfig <a name="IdpConfig" id="@cdktf/provider-okta.idp.IdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.idp.IdpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new IdpConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthorizationBinding,
    string AuthorizationUrl,
    string ClientId,
    string ClientSecret,
    string IssuerUrl,
    string JwksBinding,
    string JwksUrl,
    string Name,
    string[] Scopes,
    string TokenBinding,
    string TokenUrl,
    string AccountLinkAction = null,
    string[] AccountLinkGroupInclude = null,
    string DeprovisionedAction = null,
    string GroupsAction = null,
    string[] GroupsAssignment = null,
    string GroupsAttribute = null,
    string[] GroupsFilter = null,
    string Id = null,
    string IssuerMode = null,
    double MaxClockSkew = null,
    object ProfileMaster = null,
    string ProtocolType = null,
    string ProvisioningAction = null,
    string RequestSignatureAlgorithm = null,
    string RequestSignatureScope = null,
    string Status = null,
    string SubjectMatchAttribute = null,
    string SubjectMatchType = null,
    string SuspendedAction = null,
    string UserInfoBinding = null,
    string UserInfoUrl = null,
    string UsernameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl">IssuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding">JwksBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl">JwksUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.name">Name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAction">GroupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.protocolType">ProtocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>string</code> | The HMAC Signature Algorithm used when signing an authorization request. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>string</code> | Specifies whether to digitally sign an authorization request to the IdP. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding">UserInfoBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl">UserInfoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}. |
| <code><a href="#@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.idp.IdpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.idp.IdpConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.idp.IdpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.idp.IdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.idp.IdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.idp.IdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_binding Idp#authorization_binding}.

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#authorization_url Idp#authorization_url}.

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.idp.IdpConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_id Idp#client_id}.

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.idp.IdpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#client_secret Idp#client_secret}.

---

##### `IssuerUrl`<sup>Required</sup> <a name="IssuerUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerUrl"></a>

```csharp
public string IssuerUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_url Idp#issuer_url}.

---

##### `JwksBinding`<sup>Required</sup> <a name="JwksBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksBinding"></a>

```csharp
public string JwksBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_binding Idp#jwks_binding}.

---

##### `JwksUrl`<sup>Required</sup> <a name="JwksUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.jwksUrl"></a>

```csharp
public string JwksUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#jwks_url Idp#jwks_url}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.idp.IdpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#name Idp#name}

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.idp.IdpConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#scopes Idp#scopes}.

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_binding Idp#token_binding}.

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#token_url Idp#token_url}.

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_action Idp#account_link_action}.

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.idp.IdpConfig.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#account_link_group_include Idp#account_link_group_include}.

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.idp.IdpConfig.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#deprovisioned_action Idp#deprovisioned_action}.

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAction"></a>

```csharp
public string GroupsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_action Idp#groups_action}.

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_assignment Idp#groups_assignment}.

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_attribute Idp#groups_attribute}.

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.idp.IdpConfig.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#groups_filter Idp#groups_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.idp.IdpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#id Idp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.idp.IdpConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, custom domain URL, or dynamic.

See Identity Provider attributes - issuerMode - https://developer.okta.com/docs/reference/api/idps/#identity-provider-attributes

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#issuer_mode Idp#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.idp.IdpConfig.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#max_clock_skew Idp#max_clock_skew}.

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.idp.IdpConfig.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#profile_master Idp#profile_master}.

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktf/provider-okta.idp.IdpConfig.property.protocolType"></a>

```csharp
public string ProtocolType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#protocol_type Idp#protocol_type}.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.idp.IdpConfig.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#provisioning_action Idp#provisioning_action}.

---

##### `RequestSignatureAlgorithm`<sup>Optional</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureAlgorithm"></a>

```csharp
public string RequestSignatureAlgorithm { get; set; }
```

- *Type:* string

The HMAC Signature Algorithm used when signing an authorization request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_algorithm Idp#request_signature_algorithm}

---

##### `RequestSignatureScope`<sup>Optional</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.idp.IdpConfig.property.requestSignatureScope"></a>

```csharp
public string RequestSignatureScope { get; set; }
```

- *Type:* string

Specifies whether to digitally sign an authorization request to the IdP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#request_signature_scope Idp#request_signature_scope}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.idp.IdpConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#status Idp#status}.

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_attribute Idp#subject_match_attribute}.

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.idp.IdpConfig.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#subject_match_type Idp#subject_match_type}.

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.idp.IdpConfig.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#suspended_action Idp#suspended_action}.

---

##### `UserInfoBinding`<sup>Optional</sup> <a name="UserInfoBinding" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoBinding"></a>

```csharp
public string UserInfoBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_binding Idp#user_info_binding}.

---

##### `UserInfoUrl`<sup>Optional</sup> <a name="UserInfoUrl" id="@cdktf/provider-okta.idp.IdpConfig.property.userInfoUrl"></a>

```csharp
public string UserInfoUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#user_info_url Idp#user_info_url}.

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.idp.IdpConfig.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/idp#username_template Idp#username_template}.

---



