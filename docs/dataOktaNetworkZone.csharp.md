# `dataOktaNetworkZone` Submodule <a name="`dataOktaNetworkZone` Submodule" id="@cdktf/provider-okta.dataOktaNetworkZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaNetworkZone <a name="DataOktaNetworkZone" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone okta_network_zone}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaNetworkZone(Construct Scope, string Id, DataOktaNetworkZoneConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig">DataOktaNetworkZoneConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig">DataOktaNetworkZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetDynamicLocationsExclude">ResetDynamicLocationsExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesExclude">ResetIpServiceCategoriesExclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesInclude">ResetIpServiceCategoriesInclude</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDynamicLocationsExclude` <a name="ResetDynamicLocationsExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetDynamicLocationsExclude"></a>

```csharp
private void ResetDynamicLocationsExclude()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpServiceCategoriesExclude` <a name="ResetIpServiceCategoriesExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesExclude"></a>

```csharp
private void ResetIpServiceCategoriesExclude()
```

##### `ResetIpServiceCategoriesInclude` <a name="ResetIpServiceCategoriesInclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetIpServiceCategoriesInclude"></a>

```csharp
private void ResetIpServiceCategoriesInclude()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaNetworkZone.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaNetworkZone.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaNetworkZone.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaNetworkZone.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaNetworkZone resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaNetworkZone to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaNetworkZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaNetworkZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.asns">Asns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocations">DynamicLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicProxyType">DynamicProxyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.gateways">Gateways</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.proxies">Proxies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.usage">Usage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExcludeInput">DynamicLocationsExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExcludeInput">IpServiceCategoriesExcludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesIncludeInput">IpServiceCategoriesIncludeInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExclude">DynamicLocationsExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExclude">IpServiceCategoriesExclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesInclude">IpServiceCategoriesInclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Asns`<sup>Required</sup> <a name="Asns" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.asns"></a>

```csharp
public string[] Asns { get; }
```

- *Type:* string[]

---

##### `DynamicLocations`<sup>Required</sup> <a name="DynamicLocations" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocations"></a>

```csharp
public string[] DynamicLocations { get; }
```

- *Type:* string[]

---

##### `DynamicProxyType`<sup>Required</sup> <a name="DynamicProxyType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicProxyType"></a>

```csharp
public string DynamicProxyType { get; }
```

- *Type:* string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.gateways"></a>

```csharp
public string[] Gateways { get; }
```

- *Type:* string[]

---

##### `Proxies`<sup>Required</sup> <a name="Proxies" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.proxies"></a>

```csharp
public string[] Proxies { get; }
```

- *Type:* string[]

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.usage"></a>

```csharp
public string Usage { get; }
```

- *Type:* string

---

##### `DynamicLocationsExcludeInput`<sup>Optional</sup> <a name="DynamicLocationsExcludeInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExcludeInput"></a>

```csharp
public string[] DynamicLocationsExcludeInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpServiceCategoriesExcludeInput`<sup>Optional</sup> <a name="IpServiceCategoriesExcludeInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExcludeInput"></a>

```csharp
public string[] IpServiceCategoriesExcludeInput { get; }
```

- *Type:* string[]

---

##### `IpServiceCategoriesIncludeInput`<sup>Optional</sup> <a name="IpServiceCategoriesIncludeInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesIncludeInput"></a>

```csharp
public string[] IpServiceCategoriesIncludeInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `DynamicLocationsExclude`<sup>Required</sup> <a name="DynamicLocationsExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.dynamicLocationsExclude"></a>

```csharp
public string[] DynamicLocationsExclude { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpServiceCategoriesExclude`<sup>Required</sup> <a name="IpServiceCategoriesExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesExclude"></a>

```csharp
public string[] IpServiceCategoriesExclude { get; }
```

- *Type:* string[]

---

##### `IpServiceCategoriesInclude`<sup>Required</sup> <a name="IpServiceCategoriesInclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.ipServiceCategoriesInclude"></a>

```csharp
public string[] IpServiceCategoriesInclude { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZone.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaNetworkZoneConfig <a name="DataOktaNetworkZoneConfig" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaNetworkZoneConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] DynamicLocationsExclude = null,
    string Id = null,
    string[] IpServiceCategoriesExclude = null,
    string[] IpServiceCategoriesInclude = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dynamicLocationsExclude">DynamicLocationsExclude</a></code> | <code>string[]</code> | Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.id">Id</a></code> | <code>string</code> | ID of the network zone to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesExclude">IpServiceCategoriesExclude</a></code> | <code>string[]</code> | List of ip service excluded. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesInclude">IpServiceCategoriesInclude</a></code> | <code>string[]</code> | List of ip service included. Use with type `DYNAMIC_V2`. |
| <code><a href="#@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.name">Name</a></code> | <code>string</code> | Name of the network zone to retrieve, conflicts with `id`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DynamicLocationsExclude`<sup>Optional</sup> <a name="DynamicLocationsExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.dynamicLocationsExclude"></a>

```csharp
public string[] DynamicLocationsExclude { get; set; }
```

- *Type:* string[]

Array of locations ISO-3166-1(2) excluded. Format code: countryCode OR countryCode-regionCode. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone#dynamic_locations_exclude DataOktaNetworkZone#dynamic_locations_exclude}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the network zone to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone#id DataOktaNetworkZone#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpServiceCategoriesExclude`<sup>Optional</sup> <a name="IpServiceCategoriesExclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesExclude"></a>

```csharp
public string[] IpServiceCategoriesExclude { get; set; }
```

- *Type:* string[]

List of ip service excluded. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone#ip_service_categories_exclude DataOktaNetworkZone#ip_service_categories_exclude}

---

##### `IpServiceCategoriesInclude`<sup>Optional</sup> <a name="IpServiceCategoriesInclude" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.ipServiceCategoriesInclude"></a>

```csharp
public string[] IpServiceCategoriesInclude { get; set; }
```

- *Type:* string[]

List of ip service included. Use with type `DYNAMIC_V2`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone#ip_service_categories_include DataOktaNetworkZone#ip_service_categories_include}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaNetworkZone.DataOktaNetworkZoneConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the network zone to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.14.1/docs/data-sources/network_zone#name DataOktaNetworkZone#name}

---



