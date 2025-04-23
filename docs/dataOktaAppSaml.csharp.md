# `dataOktaAppSaml` Submodule <a name="`dataOktaAppSaml` Submodule" id="@cdktf/provider-okta.dataOktaAppSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaAppSaml <a name="DataOktaAppSaml" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml okta_app_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaAppSaml(Construct Scope, string Id, DataOktaAppSamlConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig">DataOktaAppSamlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig">DataOktaAppSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetActiveOnly">ResetActiveOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabelPrefix">ResetLabelPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetRequestCompressed">ResetRequestCompressed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipGroups">ResetSkipGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipUsers">ResetSkipUsers</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetActiveOnly` <a name="ResetActiveOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetActiveOnly"></a>

```csharp
private void ResetActiveOnly()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetLabelPrefix` <a name="ResetLabelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetLabelPrefix"></a>

```csharp
private void ResetLabelPrefix()
```

##### `ResetRequestCompressed` <a name="ResetRequestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetRequestCompressed"></a>

```csharp
private void ResetRequestCompressed()
```

##### `ResetSkipGroups` <a name="ResetSkipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipGroups"></a>

```csharp
private void ResetSkipGroups()
```

##### `ResetSkipUsers` <a name="ResetSkipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.resetSkipUsers"></a>

```csharp
private void ResetSkipUsers()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaAppSaml resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaAppSaml.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaAppSaml.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaAppSaml.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaAppSaml.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaAppSaml resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaAppSaml to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaAppSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaAppSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityErrorRedirectUrl">AccessibilityErrorRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityLoginRedirectUrl">AccessibilityLoginRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilitySelfService">AccessibilitySelfService</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.acsEndpoints">AcsEndpoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.appSettingsJson">AppSettingsJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.assertionSigned">AssertionSigned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.attributeStatements">AttributeStatements</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList">DataOktaAppSamlAttributeStatementsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.authnContextClassRef">AuthnContextClassRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.autoSubmitToolbar">AutoSubmitToolbar</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.defaultRelayState">DefaultRelayState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.digestAlgorithm">DigestAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.features">Features</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.groups">Groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideIos">HideIos</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideWeb">HideWeb</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.honorForceAuthn">HonorForceAuthn</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idpIssuer">IdpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.inlineHookId">InlineHookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.keyId">KeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.links">Links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.recipient">Recipient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.responseSigned">ResponseSigned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.samlSignedRequestEnabled">SamlSignedRequestEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutCertificate">SingleLogoutCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutIssuer">SingleLogoutIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutUrl">SingleLogoutUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.spIssuer">SpIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdFormat">SubjectNameIdFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdTemplate">SubjectNameIdTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplate">UserNameTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplatePushStatus">UserNameTemplatePushStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateSuffix">UserNameTemplateSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateType">UserNameTemplateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.users">Users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnlyInput">ActiveOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefixInput">LabelPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressedInput">RequestCompressedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroupsInput">SkipGroupsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsersInput">SkipUsersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnly">ActiveOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefix">LabelPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressed">RequestCompressed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroups">SkipGroups</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsers">SkipUsers</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AccessibilityErrorRedirectUrl`<sup>Required</sup> <a name="AccessibilityErrorRedirectUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityErrorRedirectUrl"></a>

```csharp
public string AccessibilityErrorRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilityLoginRedirectUrl`<sup>Required</sup> <a name="AccessibilityLoginRedirectUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilityLoginRedirectUrl"></a>

```csharp
public string AccessibilityLoginRedirectUrl { get; }
```

- *Type:* string

---

##### `AccessibilitySelfService`<sup>Required</sup> <a name="AccessibilitySelfService" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.accessibilitySelfService"></a>

```csharp
public IResolvable AccessibilitySelfService { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AcsEndpoints`<sup>Required</sup> <a name="AcsEndpoints" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.acsEndpoints"></a>

```csharp
public string[] AcsEndpoints { get; }
```

- *Type:* string[]

---

##### `AppSettingsJson`<sup>Required</sup> <a name="AppSettingsJson" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.appSettingsJson"></a>

```csharp
public string AppSettingsJson { get; }
```

- *Type:* string

---

##### `AssertionSigned`<sup>Required</sup> <a name="AssertionSigned" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.assertionSigned"></a>

```csharp
public IResolvable AssertionSigned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AttributeStatements`<sup>Required</sup> <a name="AttributeStatements" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.attributeStatements"></a>

```csharp
public DataOktaAppSamlAttributeStatementsList AttributeStatements { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList">DataOktaAppSamlAttributeStatementsList</a>

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `AuthnContextClassRef`<sup>Required</sup> <a name="AuthnContextClassRef" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.authnContextClassRef"></a>

```csharp
public string AuthnContextClassRef { get; }
```

- *Type:* string

---

##### `AutoSubmitToolbar`<sup>Required</sup> <a name="AutoSubmitToolbar" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.autoSubmitToolbar"></a>

```csharp
public IResolvable AutoSubmitToolbar { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DefaultRelayState`<sup>Required</sup> <a name="DefaultRelayState" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.defaultRelayState"></a>

```csharp
public string DefaultRelayState { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DigestAlgorithm`<sup>Required</sup> <a name="DigestAlgorithm" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.digestAlgorithm"></a>

```csharp
public string DigestAlgorithm { get; }
```

- *Type:* string

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.features"></a>

```csharp
public string[] Features { get; }
```

- *Type:* string[]

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.groups"></a>

```csharp
public string[] Groups { get; }
```

- *Type:* string[]

---

##### `HideIos`<sup>Required</sup> <a name="HideIos" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideIos"></a>

```csharp
public IResolvable HideIos { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HideWeb`<sup>Required</sup> <a name="HideWeb" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.hideWeb"></a>

```csharp
public IResolvable HideWeb { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `HonorForceAuthn`<sup>Required</sup> <a name="HonorForceAuthn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.honorForceAuthn"></a>

```csharp
public IResolvable HonorForceAuthn { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IdpIssuer`<sup>Required</sup> <a name="IdpIssuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idpIssuer"></a>

```csharp
public string IdpIssuer { get; }
```

- *Type:* string

---

##### `InlineHookId`<sup>Required</sup> <a name="InlineHookId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.inlineHookId"></a>

```csharp
public string InlineHookId { get; }
```

- *Type:* string

---

##### `KeyId`<sup>Required</sup> <a name="KeyId" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.keyId"></a>

```csharp
public string KeyId { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.links"></a>

```csharp
public string Links { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Recipient`<sup>Required</sup> <a name="Recipient" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.recipient"></a>

```csharp
public string Recipient { get; }
```

- *Type:* string

---

##### `ResponseSigned`<sup>Required</sup> <a name="ResponseSigned" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.responseSigned"></a>

```csharp
public IResolvable ResponseSigned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SamlSignedRequestEnabled`<sup>Required</sup> <a name="SamlSignedRequestEnabled" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.samlSignedRequestEnabled"></a>

```csharp
public IResolvable SamlSignedRequestEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.signatureAlgorithm"></a>

```csharp
public string SignatureAlgorithm { get; }
```

- *Type:* string

---

##### `SingleLogoutCertificate`<sup>Required</sup> <a name="SingleLogoutCertificate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutCertificate"></a>

```csharp
public string SingleLogoutCertificate { get; }
```

- *Type:* string

---

##### `SingleLogoutIssuer`<sup>Required</sup> <a name="SingleLogoutIssuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutIssuer"></a>

```csharp
public string SingleLogoutIssuer { get; }
```

- *Type:* string

---

##### `SingleLogoutUrl`<sup>Required</sup> <a name="SingleLogoutUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.singleLogoutUrl"></a>

```csharp
public string SingleLogoutUrl { get; }
```

- *Type:* string

---

##### `SpIssuer`<sup>Required</sup> <a name="SpIssuer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.spIssuer"></a>

```csharp
public string SpIssuer { get; }
```

- *Type:* string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubjectNameIdFormat`<sup>Required</sup> <a name="SubjectNameIdFormat" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdFormat"></a>

```csharp
public string SubjectNameIdFormat { get; }
```

- *Type:* string

---

##### `SubjectNameIdTemplate`<sup>Required</sup> <a name="SubjectNameIdTemplate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.subjectNameIdTemplate"></a>

```csharp
public string SubjectNameIdTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplate`<sup>Required</sup> <a name="UserNameTemplate" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplate"></a>

```csharp
public string UserNameTemplate { get; }
```

- *Type:* string

---

##### `UserNameTemplatePushStatus`<sup>Required</sup> <a name="UserNameTemplatePushStatus" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplatePushStatus"></a>

```csharp
public string UserNameTemplatePushStatus { get; }
```

- *Type:* string

---

##### `UserNameTemplateSuffix`<sup>Required</sup> <a name="UserNameTemplateSuffix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateSuffix"></a>

```csharp
public string UserNameTemplateSuffix { get; }
```

- *Type:* string

---

##### `UserNameTemplateType`<sup>Required</sup> <a name="UserNameTemplateType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.userNameTemplateType"></a>

```csharp
public string UserNameTemplateType { get; }
```

- *Type:* string

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.users"></a>

```csharp
public string[] Users { get; }
```

- *Type:* string[]

---

##### `ActiveOnlyInput`<sup>Optional</sup> <a name="ActiveOnlyInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnlyInput"></a>

```csharp
public object ActiveOnlyInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `LabelPrefixInput`<sup>Optional</sup> <a name="LabelPrefixInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefixInput"></a>

```csharp
public string LabelPrefixInput { get; }
```

- *Type:* string

---

##### `RequestCompressedInput`<sup>Optional</sup> <a name="RequestCompressedInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressedInput"></a>

```csharp
public object RequestCompressedInput { get; }
```

- *Type:* object

---

##### `SkipGroupsInput`<sup>Optional</sup> <a name="SkipGroupsInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroupsInput"></a>

```csharp
public object SkipGroupsInput { get; }
```

- *Type:* object

---

##### `SkipUsersInput`<sup>Optional</sup> <a name="SkipUsersInput" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsersInput"></a>

```csharp
public object SkipUsersInput { get; }
```

- *Type:* object

---

##### `ActiveOnly`<sup>Required</sup> <a name="ActiveOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.activeOnly"></a>

```csharp
public object ActiveOnly { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `LabelPrefix`<sup>Required</sup> <a name="LabelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.labelPrefix"></a>

```csharp
public string LabelPrefix { get; }
```

- *Type:* string

---

##### `RequestCompressed`<sup>Required</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.requestCompressed"></a>

```csharp
public object RequestCompressed { get; }
```

- *Type:* object

---

##### `SkipGroups`<sup>Required</sup> <a name="SkipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipGroups"></a>

```csharp
public object SkipGroups { get; }
```

- *Type:* object

---

##### `SkipUsers`<sup>Required</sup> <a name="SkipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.skipUsers"></a>

```csharp
public object SkipUsers { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSaml.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaAppSamlAttributeStatements <a name="DataOktaAppSamlAttributeStatements" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaAppSamlAttributeStatements {

};
```


### DataOktaAppSamlConfig <a name="DataOktaAppSamlConfig" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaAppSamlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object ActiveOnly = null,
    string Id = null,
    string Label = null,
    string LabelPrefix = null,
    object RequestCompressed = null,
    object SkipGroups = null,
    object SkipUsers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.activeOnly">ActiveOnly</a></code> | <code>object</code> | Search only ACTIVE applications. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.id">Id</a></code> | <code>string</code> | Id of application to retrieve, conflicts with label and label_prefix. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.label">Label</a></code> | <code>string</code> | The label of the app to retrieve, conflicts with label_prefix and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.labelPrefix">LabelPrefix</a></code> | <code>string</code> | Label prefix of the app to retrieve, conflicts with label and id. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.requestCompressed">RequestCompressed</a></code> | <code>object</code> | Denotes whether the request is compressed or not. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipGroups">SkipGroups</a></code> | <code>object</code> | Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipUsers">SkipUsers</a></code> | <code>object</code> | Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ActiveOnly`<sup>Optional</sup> <a name="ActiveOnly" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.activeOnly"></a>

```csharp
public object ActiveOnly { get; set; }
```

- *Type:* object

Search only ACTIVE applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#active_only DataOktaAppSaml#active_only}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Id of application to retrieve, conflicts with label and label_prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#id DataOktaAppSaml#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

The label of the app to retrieve, conflicts with label_prefix and id.

Label
uses the ?q=<label> query parameter exposed by Okta's API. It should be noted that at this time
this searches both name and label. This is used to avoid paginating through all applications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#label DataOktaAppSaml#label}

---

##### `LabelPrefix`<sup>Optional</sup> <a name="LabelPrefix" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.labelPrefix"></a>

```csharp
public string LabelPrefix { get; set; }
```

- *Type:* string

Label prefix of the app to retrieve, conflicts with label and id.

This will tell the
provider to do a starts with query as opposed to an equals query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#label_prefix DataOktaAppSaml#label_prefix}

---

##### `RequestCompressed`<sup>Optional</sup> <a name="RequestCompressed" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.requestCompressed"></a>

```csharp
public object RequestCompressed { get; set; }
```

- *Type:* object

Denotes whether the request is compressed or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#request_compressed DataOktaAppSaml#request_compressed}

---

##### `SkipGroups`<sup>Optional</sup> <a name="SkipGroups" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipGroups"></a>

```csharp
public object SkipGroups { get; set; }
```

- *Type:* object

Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#skip_groups DataOktaAppSaml#skip_groups}

---

##### `SkipUsers`<sup>Optional</sup> <a name="SkipUsers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlConfig.property.skipUsers"></a>

```csharp
public object SkipUsers { get; set; }
```

- *Type:* object

Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.17.0/docs/data-sources/app_saml#skip_users DataOktaAppSaml#skip_users}

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaAppSamlAttributeStatementsList <a name="DataOktaAppSamlAttributeStatementsList" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaAppSamlAttributeStatementsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get"></a>

```csharp
private DataOktaAppSamlAttributeStatementsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOktaAppSamlAttributeStatementsOutputReference <a name="DataOktaAppSamlAttributeStatementsOutputReference" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaAppSamlAttributeStatementsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterType">FilterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterValue">FilterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements">DataOktaAppSamlAttributeStatements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilterType`<sup>Required</sup> <a name="FilterType" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterType"></a>

```csharp
public string FilterType { get; }
```

- *Type:* string

---

##### `FilterValue`<sup>Required</sup> <a name="FilterValue" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.filterValue"></a>

```csharp
public string FilterValue { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatementsOutputReference.property.internalValue"></a>

```csharp
public DataOktaAppSamlAttributeStatements InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaAppSaml.DataOktaAppSamlAttributeStatements">DataOktaAppSamlAttributeStatements</a>

---



