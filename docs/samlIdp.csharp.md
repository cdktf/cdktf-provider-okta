# `okta_saml_idp`

Refer to the Terraform Registory for docs: [`okta_saml_idp`](https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp).

# `samlIdp` Submodule <a name="`samlIdp` Submodule" id="@cdktf/provider-okta.samlIdp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlIdp <a name="SamlIdp" id="@cdktf/provider-okta.samlIdp.SamlIdp"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp okta_saml_idp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlIdp(Construct Scope, string Id, SamlIdpConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig">SamlIdpConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.samlIdp.SamlIdp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig">SamlIdpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkAction">ResetAccountLinkAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkGroupInclude">ResetAccountLinkGroupInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsBinding">ResetAcsBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsType">ResetAcsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetDeprovisionedAction">ResetDeprovisionedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAction">ResetGroupsAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAssignment">ResetGroupsAssignment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAttribute">ResetGroupsAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsFilter">ResetGroupsFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetIssuerMode">ResetIssuerMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetMaxClockSkew">ResetMaxClockSkew</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetNameFormat">ResetNameFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetProfileMaster">ResetProfileMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetProvisioningAction">ResetProvisioningAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureAlgorithm">ResetRequestSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureScope">ResetRequestSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureAlgorithm">ResetResponseSignatureAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureScope">ResetResponseSignatureScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoBinding">ResetSsoBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoDestination">ResetSsoDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFilter">ResetSubjectFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFormat">ResetSubjectFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchAttribute">ResetSubjectMatchAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchType">ResetSubjectMatchType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetSuspendedAction">ResetSuspendedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.resetUsernameTemplate">ResetUsernameTemplate</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.samlIdp.SamlIdp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.samlIdp.SamlIdp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.samlIdp.SamlIdp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.samlIdp.SamlIdp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.samlIdp.SamlIdp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountLinkAction` <a name="ResetAccountLinkAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkAction"></a>

```csharp
private void ResetAccountLinkAction()
```

##### `ResetAccountLinkGroupInclude` <a name="ResetAccountLinkGroupInclude" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAccountLinkGroupInclude"></a>

```csharp
private void ResetAccountLinkGroupInclude()
```

##### `ResetAcsBinding` <a name="ResetAcsBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsBinding"></a>

```csharp
private void ResetAcsBinding()
```

##### `ResetAcsType` <a name="ResetAcsType" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetAcsType"></a>

```csharp
private void ResetAcsType()
```

##### `ResetDeprovisionedAction` <a name="ResetDeprovisionedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetDeprovisionedAction"></a>

```csharp
private void ResetDeprovisionedAction()
```

##### `ResetGroupsAction` <a name="ResetGroupsAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAction"></a>

```csharp
private void ResetGroupsAction()
```

##### `ResetGroupsAssignment` <a name="ResetGroupsAssignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAssignment"></a>

```csharp
private void ResetGroupsAssignment()
```

##### `ResetGroupsAttribute` <a name="ResetGroupsAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsAttribute"></a>

```csharp
private void ResetGroupsAttribute()
```

##### `ResetGroupsFilter` <a name="ResetGroupsFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetGroupsFilter"></a>

```csharp
private void ResetGroupsFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIssuerMode` <a name="ResetIssuerMode" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetIssuerMode"></a>

```csharp
private void ResetIssuerMode()
```

##### `ResetMaxClockSkew` <a name="ResetMaxClockSkew" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetMaxClockSkew"></a>

```csharp
private void ResetMaxClockSkew()
```

##### `ResetNameFormat` <a name="ResetNameFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetNameFormat"></a>

```csharp
private void ResetNameFormat()
```

##### `ResetProfileMaster` <a name="ResetProfileMaster" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetProfileMaster"></a>

```csharp
private void ResetProfileMaster()
```

##### `ResetProvisioningAction` <a name="ResetProvisioningAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetProvisioningAction"></a>

```csharp
private void ResetProvisioningAction()
```

##### `ResetRequestSignatureAlgorithm` <a name="ResetRequestSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureAlgorithm"></a>

```csharp
private void ResetRequestSignatureAlgorithm()
```

##### `ResetRequestSignatureScope` <a name="ResetRequestSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetRequestSignatureScope"></a>

```csharp
private void ResetRequestSignatureScope()
```

##### `ResetResponseSignatureAlgorithm` <a name="ResetResponseSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureAlgorithm"></a>

```csharp
private void ResetResponseSignatureAlgorithm()
```

##### `ResetResponseSignatureScope` <a name="ResetResponseSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetResponseSignatureScope"></a>

```csharp
private void ResetResponseSignatureScope()
```

##### `ResetSsoBinding` <a name="ResetSsoBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoBinding"></a>

```csharp
private void ResetSsoBinding()
```

##### `ResetSsoDestination` <a name="ResetSsoDestination" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSsoDestination"></a>

```csharp
private void ResetSsoDestination()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetSubjectFilter` <a name="ResetSubjectFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFilter"></a>

```csharp
private void ResetSubjectFilter()
```

##### `ResetSubjectFormat` <a name="ResetSubjectFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectFormat"></a>

```csharp
private void ResetSubjectFormat()
```

##### `ResetSubjectMatchAttribute` <a name="ResetSubjectMatchAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchAttribute"></a>

```csharp
private void ResetSubjectMatchAttribute()
```

##### `ResetSubjectMatchType` <a name="ResetSubjectMatchType" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSubjectMatchType"></a>

```csharp
private void ResetSubjectMatchType()
```

##### `ResetSuspendedAction` <a name="ResetSuspendedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetSuspendedAction"></a>

```csharp
private void ResetSuspendedAction()
```

##### `ResetUsernameTemplate` <a name="ResetUsernameTemplate" id="@cdktf/provider-okta.samlIdp.SamlIdp.resetUsernameTemplate"></a>

```csharp
private void ResetUsernameTemplate()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SamlIdp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.samlIdp.SamlIdp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SamlIdp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

SamlIdp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.samlIdp.SamlIdp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.userTypeId">UserTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkActionInput">AccountLinkActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupIncludeInput">AccountLinkGroupIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBindingInput">AcsBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsTypeInput">AcsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedActionInput">DeprovisionedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsActionInput">GroupsActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignmentInput">GroupsAssignmentInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttributeInput">GroupsAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilterInput">GroupsFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerModeInput">IssuerModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.kidInput">KidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkewInput">MaxClockSkewInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormatInput">NameFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMasterInput">ProfileMasterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningActionInput">ProvisioningActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithmInput">RequestSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScopeInput">RequestSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithmInput">ResponseSignatureAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScopeInput">ResponseSignatureScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBindingInput">SsoBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestinationInput">SsoDestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrlInput">SsoUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilterInput">SubjectFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormatInput">SubjectFormatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttributeInput">SubjectMatchAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchTypeInput">SubjectMatchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedActionInput">SuspendedActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplateInput">UsernameTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBinding">AcsBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.acsType">AcsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAction">GroupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormat">NameFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScope">ResponseSignatureScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBinding">SsoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestination">SsoDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilter">SubjectFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormat">SubjectFormat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserTypeId`<sup>Required</sup> <a name="UserTypeId" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.userTypeId"></a>

```csharp
public string UserTypeId { get; }
```

- *Type:* string

---

##### `AccountLinkActionInput`<sup>Optional</sup> <a name="AccountLinkActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkActionInput"></a>

```csharp
public string AccountLinkActionInput { get; }
```

- *Type:* string

---

##### `AccountLinkGroupIncludeInput`<sup>Optional</sup> <a name="AccountLinkGroupIncludeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupIncludeInput"></a>

```csharp
public string[] AccountLinkGroupIncludeInput { get; }
```

- *Type:* string[]

---

##### `AcsBindingInput`<sup>Optional</sup> <a name="AcsBindingInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBindingInput"></a>

```csharp
public string AcsBindingInput { get; }
```

- *Type:* string

---

##### `AcsTypeInput`<sup>Optional</sup> <a name="AcsTypeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsTypeInput"></a>

```csharp
public string AcsTypeInput { get; }
```

- *Type:* string

---

##### `DeprovisionedActionInput`<sup>Optional</sup> <a name="DeprovisionedActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedActionInput"></a>

```csharp
public string DeprovisionedActionInput { get; }
```

- *Type:* string

---

##### `GroupsActionInput`<sup>Optional</sup> <a name="GroupsActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsActionInput"></a>

```csharp
public string GroupsActionInput { get; }
```

- *Type:* string

---

##### `GroupsAssignmentInput`<sup>Optional</sup> <a name="GroupsAssignmentInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignmentInput"></a>

```csharp
public string[] GroupsAssignmentInput { get; }
```

- *Type:* string[]

---

##### `GroupsAttributeInput`<sup>Optional</sup> <a name="GroupsAttributeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttributeInput"></a>

```csharp
public string GroupsAttributeInput { get; }
```

- *Type:* string

---

##### `GroupsFilterInput`<sup>Optional</sup> <a name="GroupsFilterInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilterInput"></a>

```csharp
public string[] GroupsFilterInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `IssuerModeInput`<sup>Optional</sup> <a name="IssuerModeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerModeInput"></a>

```csharp
public string IssuerModeInput { get; }
```

- *Type:* string

---

##### `KidInput`<sup>Optional</sup> <a name="KidInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.kidInput"></a>

```csharp
public string KidInput { get; }
```

- *Type:* string

---

##### `MaxClockSkewInput`<sup>Optional</sup> <a name="MaxClockSkewInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkewInput"></a>

```csharp
public double MaxClockSkewInput { get; }
```

- *Type:* double

---

##### `NameFormatInput`<sup>Optional</sup> <a name="NameFormatInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormatInput"></a>

```csharp
public string NameFormatInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProfileMasterInput`<sup>Optional</sup> <a name="ProfileMasterInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMasterInput"></a>

```csharp
public object ProfileMasterInput { get; }
```

- *Type:* object

---

##### `ProvisioningActionInput`<sup>Optional</sup> <a name="ProvisioningActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningActionInput"></a>

```csharp
public string ProvisioningActionInput { get; }
```

- *Type:* string

---

##### `RequestSignatureAlgorithmInput`<sup>Optional</sup> <a name="RequestSignatureAlgorithmInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithmInput"></a>

```csharp
public string RequestSignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `RequestSignatureScopeInput`<sup>Optional</sup> <a name="RequestSignatureScopeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScopeInput"></a>

```csharp
public string RequestSignatureScopeInput { get; }
```

- *Type:* string

---

##### `ResponseSignatureAlgorithmInput`<sup>Optional</sup> <a name="ResponseSignatureAlgorithmInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithmInput"></a>

```csharp
public string ResponseSignatureAlgorithmInput { get; }
```

- *Type:* string

---

##### `ResponseSignatureScopeInput`<sup>Optional</sup> <a name="ResponseSignatureScopeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScopeInput"></a>

```csharp
public string ResponseSignatureScopeInput { get; }
```

- *Type:* string

---

##### `SsoBindingInput`<sup>Optional</sup> <a name="SsoBindingInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBindingInput"></a>

```csharp
public string SsoBindingInput { get; }
```

- *Type:* string

---

##### `SsoDestinationInput`<sup>Optional</sup> <a name="SsoDestinationInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestinationInput"></a>

```csharp
public string SsoDestinationInput { get; }
```

- *Type:* string

---

##### `SsoUrlInput`<sup>Optional</sup> <a name="SsoUrlInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrlInput"></a>

```csharp
public string SsoUrlInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubjectFilterInput`<sup>Optional</sup> <a name="SubjectFilterInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilterInput"></a>

```csharp
public string SubjectFilterInput { get; }
```

- *Type:* string

---

##### `SubjectFormatInput`<sup>Optional</sup> <a name="SubjectFormatInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormatInput"></a>

```csharp
public string[] SubjectFormatInput { get; }
```

- *Type:* string[]

---

##### `SubjectMatchAttributeInput`<sup>Optional</sup> <a name="SubjectMatchAttributeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttributeInput"></a>

```csharp
public string SubjectMatchAttributeInput { get; }
```

- *Type:* string

---

##### `SubjectMatchTypeInput`<sup>Optional</sup> <a name="SubjectMatchTypeInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchTypeInput"></a>

```csharp
public string SubjectMatchTypeInput { get; }
```

- *Type:* string

---

##### `SuspendedActionInput`<sup>Optional</sup> <a name="SuspendedActionInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedActionInput"></a>

```csharp
public string SuspendedActionInput { get; }
```

- *Type:* string

---

##### `UsernameTemplateInput`<sup>Optional</sup> <a name="UsernameTemplateInput" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplateInput"></a>

```csharp
public string UsernameTemplateInput { get; }
```

- *Type:* string

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; }
```

- *Type:* string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; }
```

- *Type:* string[]

---

##### `AcsBinding`<sup>Required</sup> <a name="AcsBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsBinding"></a>

```csharp
public string AcsBinding { get; }
```

- *Type:* string

---

##### `AcsType`<sup>Required</sup> <a name="AcsType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.acsType"></a>

```csharp
public string AcsType { get; }
```

- *Type:* string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; }
```

- *Type:* string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAction"></a>

```csharp
public string GroupsAction { get; }
```

- *Type:* string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; }
```

- *Type:* string[]

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; }
```

- *Type:* string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NameFormat`<sup>Required</sup> <a name="NameFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.nameFormat"></a>

```csharp
public string NameFormat { get; }
```

- *Type:* string

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; }
```

- *Type:* object

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `RequestSignatureAlgorithm`<sup>Required</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureAlgorithm"></a>

```csharp
public string RequestSignatureAlgorithm { get; }
```

- *Type:* string

---

##### `RequestSignatureScope`<sup>Required</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.requestSignatureScope"></a>

```csharp
public string RequestSignatureScope { get; }
```

- *Type:* string

---

##### `ResponseSignatureAlgorithm`<sup>Required</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureAlgorithm"></a>

```csharp
public string ResponseSignatureAlgorithm { get; }
```

- *Type:* string

---

##### `ResponseSignatureScope`<sup>Required</sup> <a name="ResponseSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.responseSignatureScope"></a>

```csharp
public string ResponseSignatureScope { get; }
```

- *Type:* string

---

##### `SsoBinding`<sup>Required</sup> <a name="SsoBinding" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoBinding"></a>

```csharp
public string SsoBinding { get; }
```

- *Type:* string

---

##### `SsoDestination`<sup>Required</sup> <a name="SsoDestination" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoDestination"></a>

```csharp
public string SsoDestination { get; }
```

- *Type:* string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectFilter`<sup>Required</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFilter"></a>

```csharp
public string SubjectFilter { get; }
```

- *Type:* string

---

##### `SubjectFormat`<sup>Required</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectFormat"></a>

```csharp
public string[] SubjectFormat { get; }
```

- *Type:* string[]

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; }
```

- *Type:* string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; }
```

- *Type:* string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.samlIdp.SamlIdp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlIdpConfig <a name="SamlIdpConfig" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new SamlIdpConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Issuer,
    string Kid,
    string Name,
    string SsoUrl,
    string AccountLinkAction = null,
    string[] AccountLinkGroupInclude = null,
    string AcsBinding = null,
    string AcsType = null,
    string DeprovisionedAction = null,
    string GroupsAction = null,
    string[] GroupsAssignment = null,
    string GroupsAttribute = null,
    string[] GroupsFilter = null,
    string Id = null,
    string IssuerMode = null,
    double MaxClockSkew = null,
    string NameFormat = null,
    object ProfileMaster = null,
    string ProvisioningAction = null,
    string RequestSignatureAlgorithm = null,
    string RequestSignatureScope = null,
    string ResponseSignatureAlgorithm = null,
    string ResponseSignatureScope = null,
    string SsoBinding = null,
    string SsoDestination = null,
    string Status = null,
    string SubjectFilter = null,
    string[] SubjectFormat = null,
    string SubjectMatchAttribute = null,
    string SubjectMatchType = null,
    string SuspendedAction = null,
    string UsernameTemplate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#issuer SamlIdp#issuer}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.kid">Kid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#kid SamlIdp#kid}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.name">Name</a></code> | <code>string</code> | Name of the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#sso_url SamlIdp#sso_url}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#account_link_action SamlIdp#account_link_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#account_link_group_include SamlIdp#account_link_group_include}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsBinding">AcsBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#acs_binding SamlIdp#acs_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsType">AcsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#acs_type SamlIdp#acs_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAction">GroupsAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_action SamlIdp#groups_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_assignment SamlIdp#groups_assignment}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_attribute SamlIdp#groups_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_filter SamlIdp#groups_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#id SamlIdp#id}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuerMode">IssuerMode</a></code> | <code>string</code> | Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#max_clock_skew SamlIdp#max_clock_skew}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.nameFormat">NameFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#name_format SamlIdp#name_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.profileMaster">ProfileMaster</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#profile_master SamlIdp#profile_master}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#provisioning_action SamlIdp#provisioning_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureAlgorithm">RequestSignatureAlgorithm</a></code> | <code>string</code> | The XML digital Signature Algorithm used when signing an <AuthnRequest> message. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureScope">RequestSignatureScope</a></code> | <code>string</code> | Specifies whether to digitally sign <AuthnRequest> messages to the IdP. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureAlgorithm">ResponseSignatureAlgorithm</a></code> | <code>string</code> | The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureScope">ResponseSignatureScope</a></code> | <code>string</code> | Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoBinding">SsoBinding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#sso_binding SamlIdp#sso_binding}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoDestination">SsoDestination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#sso_destination SamlIdp#sso_destination}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#status SamlIdp#status}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFilter">SubjectFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_filter SamlIdp#subject_filter}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFormat">SubjectFormat</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_format SamlIdp#subject_format}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_match_type SamlIdp#subject_match_type}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#suspended_action SamlIdp#suspended_action}. |
| <code><a href="#@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#username_template SamlIdp#username_template}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#issuer SamlIdp#issuer}.

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.kid"></a>

```csharp
public string Kid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#kid SamlIdp#kid}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#name SamlIdp#name}

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#sso_url SamlIdp#sso_url}.

---

##### `AccountLinkAction`<sup>Optional</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#account_link_action SamlIdp#account_link_action}.

---

##### `AccountLinkGroupInclude`<sup>Optional</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#account_link_group_include SamlIdp#account_link_group_include}.

---

##### `AcsBinding`<sup>Optional</sup> <a name="AcsBinding" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsBinding"></a>

```csharp
public string AcsBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#acs_binding SamlIdp#acs_binding}.

---

##### `AcsType`<sup>Optional</sup> <a name="AcsType" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.acsType"></a>

```csharp
public string AcsType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#acs_type SamlIdp#acs_type}.

---

##### `DeprovisionedAction`<sup>Optional</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#deprovisioned_action SamlIdp#deprovisioned_action}.

---

##### `GroupsAction`<sup>Optional</sup> <a name="GroupsAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAction"></a>

```csharp
public string GroupsAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_action SamlIdp#groups_action}.

---

##### `GroupsAssignment`<sup>Optional</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_assignment SamlIdp#groups_assignment}.

---

##### `GroupsAttribute`<sup>Optional</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_attribute SamlIdp#groups_attribute}.

---

##### `GroupsFilter`<sup>Optional</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#groups_filter SamlIdp#groups_filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#id SamlIdp#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuerMode`<sup>Optional</sup> <a name="IssuerMode" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.issuerMode"></a>

```csharp
public string IssuerMode { get; set; }
```

- *Type:* string

Indicates whether Okta uses the original Okta org domain URL, or a custom domain URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#issuer_mode SamlIdp#issuer_mode}

---

##### `MaxClockSkew`<sup>Optional</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#max_clock_skew SamlIdp#max_clock_skew}.

---

##### `NameFormat`<sup>Optional</sup> <a name="NameFormat" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.nameFormat"></a>

```csharp
public string NameFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#name_format SamlIdp#name_format}.

---

##### `ProfileMaster`<sup>Optional</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.profileMaster"></a>

```csharp
public object ProfileMaster { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#profile_master SamlIdp#profile_master}.

---

##### `ProvisioningAction`<sup>Optional</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#provisioning_action SamlIdp#provisioning_action}.

---

##### `RequestSignatureAlgorithm`<sup>Optional</sup> <a name="RequestSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureAlgorithm"></a>

```csharp
public string RequestSignatureAlgorithm { get; set; }
```

- *Type:* string

The XML digital Signature Algorithm used when signing an <AuthnRequest> message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#request_signature_algorithm SamlIdp#request_signature_algorithm}

---

##### `RequestSignatureScope`<sup>Optional</sup> <a name="RequestSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.requestSignatureScope"></a>

```csharp
public string RequestSignatureScope { get; set; }
```

- *Type:* string

Specifies whether to digitally sign <AuthnRequest> messages to the IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#request_signature_scope SamlIdp#request_signature_scope}

---

##### `ResponseSignatureAlgorithm`<sup>Optional</sup> <a name="ResponseSignatureAlgorithm" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureAlgorithm"></a>

```csharp
public string ResponseSignatureAlgorithm { get; set; }
```

- *Type:* string

The minimum XML digital Signature Algorithm allowed when verifying a <SAMLResponse> message or <Assertion> element.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#response_signature_algorithm SamlIdp#response_signature_algorithm}

---

##### `ResponseSignatureScope`<sup>Optional</sup> <a name="ResponseSignatureScope" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.responseSignatureScope"></a>

```csharp
public string ResponseSignatureScope { get; set; }
```

- *Type:* string

Specifies whether to verify a <SAMLResponse> message or <Assertion> element XML digital signature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#response_signature_scope SamlIdp#response_signature_scope}

---

##### `SsoBinding`<sup>Optional</sup> <a name="SsoBinding" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoBinding"></a>

```csharp
public string SsoBinding { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#sso_binding SamlIdp#sso_binding}.

---

##### `SsoDestination`<sup>Optional</sup> <a name="SsoDestination" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.ssoDestination"></a>

```csharp
public string SsoDestination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#sso_destination SamlIdp#sso_destination}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#status SamlIdp#status}.

---

##### `SubjectFilter`<sup>Optional</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFilter"></a>

```csharp
public string SubjectFilter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_filter SamlIdp#subject_filter}.

---

##### `SubjectFormat`<sup>Optional</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectFormat"></a>

```csharp
public string[] SubjectFormat { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_format SamlIdp#subject_format}.

---

##### `SubjectMatchAttribute`<sup>Optional</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_match_attribute SamlIdp#subject_match_attribute}.

---

##### `SubjectMatchType`<sup>Optional</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#subject_match_type SamlIdp#subject_match_type}.

---

##### `SuspendedAction`<sup>Optional</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#suspended_action SamlIdp#suspended_action}.

---

##### `UsernameTemplate`<sup>Optional</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.samlIdp.SamlIdpConfig.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/3.46.0/docs/resources/saml_idp#username_template SamlIdp#username_template}.

---



