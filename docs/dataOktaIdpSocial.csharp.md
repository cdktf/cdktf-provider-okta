# `dataOktaIdpSocial` Submodule <a name="`dataOktaIdpSocial` Submodule" id="@cdktf/provider-okta.dataOktaIdpSocial"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpSocial <a name="DataOktaIdpSocial" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/idp_social okta_idp_social}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaIdpSocial(Construct Scope, string Id, DataOktaIdpSocialConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig">DataOktaIdpSocialConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig">DataOktaIdpSocialConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaIdpSocial resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSocial.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSocial.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSocial.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSocial.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaIdpSocial resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaIdpSocial to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaIdpSocial that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/idp_social#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaIdpSocial to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkAction">AccountLinkAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkGroupInclude">AccountLinkGroupInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationBinding">AuthorizationBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationUrl">AuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.deprovisionedAction">DeprovisionedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAction">GroupsAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAssignment">GroupsAssignment</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAttribute">GroupsAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsFilter">GroupsFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.maxClockSkew">MaxClockSkew</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.profileMaster">ProfileMaster</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.protocolType">ProtocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provisioningAction">ProvisioningAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchAttribute">SubjectMatchAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchType">SubjectMatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.suspendedAction">SuspendedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenBinding">TokenBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenUrl">TokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.usernameTemplate">UsernameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccountLinkAction`<sup>Required</sup> <a name="AccountLinkAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkAction"></a>

```csharp
public string AccountLinkAction { get; }
```

- *Type:* string

---

##### `AccountLinkGroupInclude`<sup>Required</sup> <a name="AccountLinkGroupInclude" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.accountLinkGroupInclude"></a>

```csharp
public string[] AccountLinkGroupInclude { get; }
```

- *Type:* string[]

---

##### `AuthorizationBinding`<sup>Required</sup> <a name="AuthorizationBinding" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationBinding"></a>

```csharp
public string AuthorizationBinding { get; }
```

- *Type:* string

---

##### `AuthorizationUrl`<sup>Required</sup> <a name="AuthorizationUrl" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.authorizationUrl"></a>

```csharp
public string AuthorizationUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DeprovisionedAction`<sup>Required</sup> <a name="DeprovisionedAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.deprovisionedAction"></a>

```csharp
public string DeprovisionedAction { get; }
```

- *Type:* string

---

##### `GroupsAction`<sup>Required</sup> <a name="GroupsAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAction"></a>

```csharp
public string GroupsAction { get; }
```

- *Type:* string

---

##### `GroupsAssignment`<sup>Required</sup> <a name="GroupsAssignment" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAssignment"></a>

```csharp
public string[] GroupsAssignment { get; }
```

- *Type:* string[]

---

##### `GroupsAttribute`<sup>Required</sup> <a name="GroupsAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsAttribute"></a>

```csharp
public string GroupsAttribute { get; }
```

- *Type:* string

---

##### `GroupsFilter`<sup>Required</sup> <a name="GroupsFilter" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.groupsFilter"></a>

```csharp
public string[] GroupsFilter { get; }
```

- *Type:* string[]

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `MaxClockSkew`<sup>Required</sup> <a name="MaxClockSkew" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.maxClockSkew"></a>

```csharp
public double MaxClockSkew { get; }
```

- *Type:* double

---

##### `ProfileMaster`<sup>Required</sup> <a name="ProfileMaster" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.profileMaster"></a>

```csharp
public IResolvable ProfileMaster { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.protocolType"></a>

```csharp
public string ProtocolType { get; }
```

- *Type:* string

---

##### `ProvisioningAction`<sup>Required</sup> <a name="ProvisioningAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.provisioningAction"></a>

```csharp
public string ProvisioningAction { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectMatchAttribute`<sup>Required</sup> <a name="SubjectMatchAttribute" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchAttribute"></a>

```csharp
public string SubjectMatchAttribute { get; }
```

- *Type:* string

---

##### `SubjectMatchType`<sup>Required</sup> <a name="SubjectMatchType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.subjectMatchType"></a>

```csharp
public string SubjectMatchType { get; }
```

- *Type:* string

---

##### `SuspendedAction`<sup>Required</sup> <a name="SuspendedAction" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.suspendedAction"></a>

```csharp
public string SuspendedAction { get; }
```

- *Type:* string

---

##### `TokenBinding`<sup>Required</sup> <a name="TokenBinding" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenBinding"></a>

```csharp
public string TokenBinding { get; }
```

- *Type:* string

---

##### `TokenUrl`<sup>Required</sup> <a name="TokenUrl" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tokenUrl"></a>

```csharp
public string TokenUrl { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UsernameTemplate`<sup>Required</sup> <a name="UsernameTemplate" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.usernameTemplate"></a>

```csharp
public string UsernameTemplate { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocial.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpSocialConfig <a name="DataOktaIdpSocialConfig" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaIdpSocialConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.id">Id</a></code> | <code>string</code> | The id of the social idp to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.name">Name</a></code> | <code>string</code> | The name of the social idp to retrieve, conflicts with `id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The id of the social idp to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/idp_social#id DataOktaIdpSocial#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaIdpSocial.DataOktaIdpSocialConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the social idp to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.6.3/docs/data-sources/idp_social#name DataOktaIdpSocial#name}

---



