# `dataOktaDeviceAssurancePolicy` Submodule <a name="`dataOktaDeviceAssurancePolicy` Submodule" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaDeviceAssurancePolicy <a name="DataOktaDeviceAssurancePolicy" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy okta_device_assurance_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicy(Construct Scope, string Id, DataOktaDeviceAssurancePolicyConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig">DataOktaDeviceAssurancePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig">DataOktaDeviceAssurancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.putThirdPartySignalProvider">PutThirdPartySignalProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetSecureHardwarePresent">ResetSecureHardwarePresent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetThirdPartySignalProvider">ResetThirdPartySignalProvider</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutThirdPartySignalProvider` <a name="PutThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.putThirdPartySignalProvider"></a>

```csharp
private void PutThirdPartySignalProvider(DataOktaDeviceAssurancePolicyThirdPartySignalProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.putThirdPartySignalProvider.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetSecureHardwarePresent` <a name="ResetSecureHardwarePresent" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetSecureHardwarePresent"></a>

```csharp
private void ResetSecureHardwarePresent()
```

##### `ResetThirdPartySignalProvider` <a name="ResetThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.resetThirdPartySignalProvider"></a>

```csharp
private void ResetThirdPartySignalProvider()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaDeviceAssurancePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDeviceAssurancePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDeviceAssurancePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDeviceAssurancePolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDeviceAssurancePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaDeviceAssurancePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaDeviceAssurancePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaDeviceAssurancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaDeviceAssurancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.diskEncryptionType">DiskEncryptionType</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference">DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.jailbreak">Jailbreak</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersion">OsVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference">DataOktaDeviceAssurancePolicyOsVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersionConstraint">OsVersionConstraint</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList">DataOktaDeviceAssurancePolicyOsVersionConstraintList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.screenlockType">ScreenlockType</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference">DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProvider">ThirdPartySignalProvider</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresentInput">SecureHardwarePresentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProviderInput">ThirdPartySignalProviderInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DiskEncryptionType`<sup>Required</sup> <a name="DiskEncryptionType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.diskEncryptionType"></a>

```csharp
public DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference DiskEncryptionType { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference">DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference</a>

---

##### `Jailbreak`<sup>Required</sup> <a name="Jailbreak" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.jailbreak"></a>

```csharp
public IResolvable Jailbreak { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersion"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionOutputReference OsVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference">DataOktaDeviceAssurancePolicyOsVersionOutputReference</a>

---

##### `OsVersionConstraint`<sup>Required</sup> <a name="OsVersionConstraint" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.osVersionConstraint"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionConstraintList OsVersionConstraint { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList">DataOktaDeviceAssurancePolicyOsVersionConstraintList</a>

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `ScreenlockType`<sup>Required</sup> <a name="ScreenlockType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.screenlockType"></a>

```csharp
public DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference ScreenlockType { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference">DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference</a>

---

##### `ThirdPartySignalProvider`<sup>Required</sup> <a name="ThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProvider"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference ThirdPartySignalProvider { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecureHardwarePresentInput`<sup>Optional</sup> <a name="SecureHardwarePresentInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresentInput"></a>

```csharp
public object SecureHardwarePresentInput { get; }
```

- *Type:* object

---

##### `ThirdPartySignalProviderInput`<sup>Optional</sup> <a name="ThirdPartySignalProviderInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.thirdPartySignalProviderInput"></a>

```csharp
public object ThirdPartySignalProviderInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecureHardwarePresent`<sup>Required</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.secureHardwarePresent"></a>

```csharp
public object SecureHardwarePresent { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaDeviceAssurancePolicyConfig <a name="DataOktaDeviceAssurancePolicyConfig" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Name = null,
    object SecureHardwarePresent = null,
    DataOktaDeviceAssurancePolicyThirdPartySignalProvider ThirdPartySignalProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.id">Id</a></code> | <code>string</code> | ID of the user type to retrieve, conflicts with `name`. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.name">Name</a></code> | <code>string</code> | Name of user type to retrieve, conflicts with `id`. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.secureHardwarePresent">SecureHardwarePresent</a></code> | <code>object</code> | Indicates if the device contains a secure hardware functionality. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.thirdPartySignalProvider">ThirdPartySignalProvider</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a></code> | Indicates if the device contains a secure hardware functionality. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the user type to retrieve, conflicts with `name`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#id DataOktaDeviceAssurancePolicy#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of user type to retrieve, conflicts with `id`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#name DataOktaDeviceAssurancePolicy#name}

---

##### `SecureHardwarePresent`<sup>Optional</sup> <a name="SecureHardwarePresent" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.secureHardwarePresent"></a>

```csharp
public object SecureHardwarePresent { get; set; }
```

- *Type:* object

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#secure_hardware_present DataOktaDeviceAssurancePolicy#secure_hardware_present}

---

##### `ThirdPartySignalProvider`<sup>Optional</sup> <a name="ThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyConfig.property.thirdPartySignalProvider"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProvider ThirdPartySignalProvider { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider">DataOktaDeviceAssurancePolicyThirdPartySignalProvider</a>

Indicates if the device contains a secure hardware functionality.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#third_party_signal_provider DataOktaDeviceAssurancePolicy#third_party_signal_provider}

---

### DataOktaDeviceAssurancePolicyDiskEncryptionType <a name="DataOktaDeviceAssurancePolicyDiskEncryptionType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyDiskEncryptionType {

};
```


### DataOktaDeviceAssurancePolicyOsVersion <a name="DataOktaDeviceAssurancePolicyOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersion {

};
```


### DataOktaDeviceAssurancePolicyOsVersionConstraint <a name="DataOktaDeviceAssurancePolicyOsVersionConstraint" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionConstraint {

};
```


### DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement {

};
```


### DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement <a name="DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement {

};
```


### DataOktaDeviceAssurancePolicyScreenlockType <a name="DataOktaDeviceAssurancePolicyScreenlockType" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyScreenlockType {

};
```


### DataOktaDeviceAssurancePolicyThirdPartySignalProvider <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProvider" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProvider {
    DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc Dtc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider.property.dtc">Dtc</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#dtc DataOktaDeviceAssurancePolicy#dtc}. |

---

##### `Dtc`<sup>Optional</sup> <a name="Dtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProvider.property.dtc"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc Dtc { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#dtc DataOktaDeviceAssurancePolicy#dtc}.

---

### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc {
    object AllowScreenLock = null,
    DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion BrowserVersion = null,
    object BuiltInDnsClientEnabled = null,
    object ChromeRemoteDesktopAppBlocked = null,
    string CrowdStrikeAgentId = null,
    string CrowdStrikeCustomerId = null,
    string DeviceEnrollmentDomain = null,
    object DiskEncrypted = null,
    string KeyTrustLevel = null,
    object ManagedDevice = null,
    object OsFirewall = null,
    DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion OsVersion = null,
    string PasswordProtectionWarningTrigger = null,
    object RealtimeUrlCheckMode = null,
    string SafeBrowsingProtectionLevel = null,
    object ScreenLockSecured = null,
    object SiteIsolationEnabled = null,
    object ThirdPartyBlockingEnabled = null,
    string WindowsMachineDomain = null,
    string WindowsUserDomain = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.allowScreenLock">AllowScreenLock</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#allow_screen_lock DataOktaDeviceAssurancePolicy#allow_screen_lock}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.browserVersion">BrowserVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#browser_version DataOktaDeviceAssurancePolicy#browser_version}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.builtInDnsClientEnabled">BuiltInDnsClientEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#built_in_dns_client_enabled DataOktaDeviceAssurancePolicy#built_in_dns_client_enabled}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.chromeRemoteDesktopAppBlocked">ChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#chrome_remote_desktop_app_blocked DataOktaDeviceAssurancePolicy#chrome_remote_desktop_app_blocked}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeAgentId">CrowdStrikeAgentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#crowd_strike_agent_id DataOktaDeviceAssurancePolicy#crowd_strike_agent_id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeCustomerId">CrowdStrikeCustomerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#crowd_strike_customer_id DataOktaDeviceAssurancePolicy#crowd_strike_customer_id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.deviceEnrollmentDomain">DeviceEnrollmentDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#device_enrollment_domain DataOktaDeviceAssurancePolicy#device_enrollment_domain}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.diskEncrypted">DiskEncrypted</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#disk_encrypted DataOktaDeviceAssurancePolicy#disk_encrypted}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.keyTrustLevel">KeyTrustLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#key_trust_level DataOktaDeviceAssurancePolicy#key_trust_level}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.managedDevice">ManagedDevice</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#managed_device DataOktaDeviceAssurancePolicy#managed_device}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osFirewall">OsFirewall</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#os_firewall DataOktaDeviceAssurancePolicy#os_firewall}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osVersion">OsVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#os_version DataOktaDeviceAssurancePolicy#os_version}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.passwordProtectionWarningTrigger">PasswordProtectionWarningTrigger</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#password_protection_warning_trigger DataOktaDeviceAssurancePolicy#password_protection_warning_trigger}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.realtimeUrlCheckMode">RealtimeUrlCheckMode</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#realtime_url_check_mode DataOktaDeviceAssurancePolicy#realtime_url_check_mode}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.safeBrowsingProtectionLevel">SafeBrowsingProtectionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#safe_browsing_protection_level DataOktaDeviceAssurancePolicy#safe_browsing_protection_level}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.screenLockSecured">ScreenLockSecured</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#screen_lock_secured DataOktaDeviceAssurancePolicy#screen_lock_secured}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.siteIsolationEnabled">SiteIsolationEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#site_isolation_enabled DataOktaDeviceAssurancePolicy#site_isolation_enabled}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.thirdPartyBlockingEnabled">ThirdPartyBlockingEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#third_party_blocking_enabled DataOktaDeviceAssurancePolicy#third_party_blocking_enabled}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsMachineDomain">WindowsMachineDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#windows_machine_domain DataOktaDeviceAssurancePolicy#windows_machine_domain}. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsUserDomain">WindowsUserDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#windows_user_domain DataOktaDeviceAssurancePolicy#windows_user_domain}. |

---

##### `AllowScreenLock`<sup>Optional</sup> <a name="AllowScreenLock" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.allowScreenLock"></a>

```csharp
public object AllowScreenLock { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#allow_screen_lock DataOktaDeviceAssurancePolicy#allow_screen_lock}.

---

##### `BrowserVersion`<sup>Optional</sup> <a name="BrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.browserVersion"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion BrowserVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#browser_version DataOktaDeviceAssurancePolicy#browser_version}.

---

##### `BuiltInDnsClientEnabled`<sup>Optional</sup> <a name="BuiltInDnsClientEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.builtInDnsClientEnabled"></a>

```csharp
public object BuiltInDnsClientEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#built_in_dns_client_enabled DataOktaDeviceAssurancePolicy#built_in_dns_client_enabled}.

---

##### `ChromeRemoteDesktopAppBlocked`<sup>Optional</sup> <a name="ChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.chromeRemoteDesktopAppBlocked"></a>

```csharp
public object ChromeRemoteDesktopAppBlocked { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#chrome_remote_desktop_app_blocked DataOktaDeviceAssurancePolicy#chrome_remote_desktop_app_blocked}.

---

##### `CrowdStrikeAgentId`<sup>Optional</sup> <a name="CrowdStrikeAgentId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeAgentId"></a>

```csharp
public string CrowdStrikeAgentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#crowd_strike_agent_id DataOktaDeviceAssurancePolicy#crowd_strike_agent_id}.

---

##### `CrowdStrikeCustomerId`<sup>Optional</sup> <a name="CrowdStrikeCustomerId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.crowdStrikeCustomerId"></a>

```csharp
public string CrowdStrikeCustomerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#crowd_strike_customer_id DataOktaDeviceAssurancePolicy#crowd_strike_customer_id}.

---

##### `DeviceEnrollmentDomain`<sup>Optional</sup> <a name="DeviceEnrollmentDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.deviceEnrollmentDomain"></a>

```csharp
public string DeviceEnrollmentDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#device_enrollment_domain DataOktaDeviceAssurancePolicy#device_enrollment_domain}.

---

##### `DiskEncrypted`<sup>Optional</sup> <a name="DiskEncrypted" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.diskEncrypted"></a>

```csharp
public object DiskEncrypted { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#disk_encrypted DataOktaDeviceAssurancePolicy#disk_encrypted}.

---

##### `KeyTrustLevel`<sup>Optional</sup> <a name="KeyTrustLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.keyTrustLevel"></a>

```csharp
public string KeyTrustLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#key_trust_level DataOktaDeviceAssurancePolicy#key_trust_level}.

---

##### `ManagedDevice`<sup>Optional</sup> <a name="ManagedDevice" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.managedDevice"></a>

```csharp
public object ManagedDevice { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#managed_device DataOktaDeviceAssurancePolicy#managed_device}.

---

##### `OsFirewall`<sup>Optional</sup> <a name="OsFirewall" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osFirewall"></a>

```csharp
public object OsFirewall { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#os_firewall DataOktaDeviceAssurancePolicy#os_firewall}.

---

##### `OsVersion`<sup>Optional</sup> <a name="OsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.osVersion"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion OsVersion { get; set; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#os_version DataOktaDeviceAssurancePolicy#os_version}.

---

##### `PasswordProtectionWarningTrigger`<sup>Optional</sup> <a name="PasswordProtectionWarningTrigger" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.passwordProtectionWarningTrigger"></a>

```csharp
public string PasswordProtectionWarningTrigger { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#password_protection_warning_trigger DataOktaDeviceAssurancePolicy#password_protection_warning_trigger}.

---

##### `RealtimeUrlCheckMode`<sup>Optional</sup> <a name="RealtimeUrlCheckMode" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.realtimeUrlCheckMode"></a>

```csharp
public object RealtimeUrlCheckMode { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#realtime_url_check_mode DataOktaDeviceAssurancePolicy#realtime_url_check_mode}.

---

##### `SafeBrowsingProtectionLevel`<sup>Optional</sup> <a name="SafeBrowsingProtectionLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.safeBrowsingProtectionLevel"></a>

```csharp
public string SafeBrowsingProtectionLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#safe_browsing_protection_level DataOktaDeviceAssurancePolicy#safe_browsing_protection_level}.

---

##### `ScreenLockSecured`<sup>Optional</sup> <a name="ScreenLockSecured" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.screenLockSecured"></a>

```csharp
public object ScreenLockSecured { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#screen_lock_secured DataOktaDeviceAssurancePolicy#screen_lock_secured}.

---

##### `SiteIsolationEnabled`<sup>Optional</sup> <a name="SiteIsolationEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.siteIsolationEnabled"></a>

```csharp
public object SiteIsolationEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#site_isolation_enabled DataOktaDeviceAssurancePolicy#site_isolation_enabled}.

---

##### `ThirdPartyBlockingEnabled`<sup>Optional</sup> <a name="ThirdPartyBlockingEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.thirdPartyBlockingEnabled"></a>

```csharp
public object ThirdPartyBlockingEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#third_party_blocking_enabled DataOktaDeviceAssurancePolicy#third_party_blocking_enabled}.

---

##### `WindowsMachineDomain`<sup>Optional</sup> <a name="WindowsMachineDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsMachineDomain"></a>

```csharp
public string WindowsMachineDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#windows_machine_domain DataOktaDeviceAssurancePolicy#windows_machine_domain}.

---

##### `WindowsUserDomain`<sup>Optional</sup> <a name="WindowsUserDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc.property.windowsUserDomain"></a>

```csharp
public string WindowsUserDomain { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#windows_user_domain DataOktaDeviceAssurancePolicy#windows_user_domain}.

---

### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion {
    string Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion.property.minimum">Minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}. |

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion.property.minimum"></a>

```csharp
public string Minimum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}.

---

### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion {
    string Minimum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion.property.minimum">Minimum</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}. |

---

##### `Minimum`<sup>Optional</sup> <a name="Minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion.property.minimum"></a>

```csharp
public string Minimum { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.15.0/docs/data-sources/device_assurance_policy#minimum DataOktaDeviceAssurancePolicy#minimum}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference <a name="DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType">DataOktaDeviceAssurancePolicyDiskEncryptionType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionTypeOutputReference.property.internalValue"></a>

```csharp
public DataOktaDeviceAssurancePolicyDiskEncryptionType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyDiskEncryptionType">DataOktaDeviceAssurancePolicyDiskEncryptionType</a>

---


### DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor">DistanceFromLatestMajor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.latestSecurityPatch">LatestSecurityPatch</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DistanceFromLatestMajor`<sup>Required</sup> <a name="DistanceFromLatestMajor" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor"></a>

```csharp
public double DistanceFromLatestMajor { get; }
```

- *Type:* double

---

##### `LatestSecurityPatch`<sup>Required</sup> <a name="LatestSecurityPatch" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.latestSecurityPatch"></a>

```csharp
public IResolvable LatestSecurityPatch { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference.property.internalValue"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirement</a>

---


### DataOktaDeviceAssurancePolicyOsVersionConstraintList <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintList" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionConstraintList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.get"></a>

```csharp
private DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.dynamicVersionRequirement">DynamicVersionRequirement</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.majorVersionConstraint">MajorVersionConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint">DataOktaDeviceAssurancePolicyOsVersionConstraint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicVersionRequirement`<sup>Required</sup> <a name="DynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.dynamicVersionRequirement"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference DynamicVersionRequirement { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionConstraintDynamicVersionRequirementOutputReference</a>

---

##### `MajorVersionConstraint`<sup>Required</sup> <a name="MajorVersionConstraint" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.majorVersionConstraint"></a>

```csharp
public string MajorVersionConstraint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraintOutputReference.property.internalValue"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionConstraint InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionConstraint">DataOktaDeviceAssurancePolicyOsVersionConstraint</a>

---


### DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor">DistanceFromLatestMajor</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.latestSecurityPatch">LatestSecurityPatch</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DistanceFromLatestMajor`<sup>Required</sup> <a name="DistanceFromLatestMajor" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.distanceFromLatestMajor"></a>

```csharp
public double DistanceFromLatestMajor { get; }
```

- *Type:* double

---

##### `LatestSecurityPatch`<sup>Required</sup> <a name="LatestSecurityPatch" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.latestSecurityPatch"></a>

```csharp
public IResolvable LatestSecurityPatch { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference.property.internalValue"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirement</a>

---


### DataOktaDeviceAssurancePolicyOsVersionOutputReference <a name="DataOktaDeviceAssurancePolicyOsVersionOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyOsVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.dynamicVersionRequirement">DynamicVersionRequirement</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion">DataOktaDeviceAssurancePolicyOsVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DynamicVersionRequirement`<sup>Required</sup> <a name="DynamicVersionRequirement" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.dynamicVersionRequirement"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference DynamicVersionRequirement { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference">DataOktaDeviceAssurancePolicyOsVersionDynamicVersionRequirementOutputReference</a>

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersionOutputReference.property.internalValue"></a>

```csharp
public DataOktaDeviceAssurancePolicyOsVersion InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyOsVersion">DataOktaDeviceAssurancePolicyOsVersion</a>

---


### DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference <a name="DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.include">Include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType">DataOktaDeviceAssurancePolicyScreenlockType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Include`<sup>Required</sup> <a name="Include" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.include"></a>

```csharp
public string[] Include { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockTypeOutputReference.property.internalValue"></a>

```csharp
public DataOktaDeviceAssurancePolicyScreenlockType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyScreenlockType">DataOktaDeviceAssurancePolicyScreenlockType</a>

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimumInput">MinimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimumInput"></a>

```csharp
public string MinimumInput { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resetMinimum">ResetMinimum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMinimum` <a name="ResetMinimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.resetMinimum"></a>

```csharp
private void ResetMinimum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimumInput">MinimumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimum">Minimum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MinimumInput`<sup>Optional</sup> <a name="MinimumInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimumInput"></a>

```csharp
public string MinimumInput { get; }
```

- *Type:* string

---

##### `Minimum`<sup>Required</sup> <a name="Minimum" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.minimum"></a>

```csharp
public string Minimum { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putBrowserVersion">PutBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putOsVersion">PutOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetAllowScreenLock">ResetAllowScreenLock</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBrowserVersion">ResetBrowserVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBuiltInDnsClientEnabled">ResetBuiltInDnsClientEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetChromeRemoteDesktopAppBlocked">ResetChromeRemoteDesktopAppBlocked</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeAgentId">ResetCrowdStrikeAgentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeCustomerId">ResetCrowdStrikeCustomerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDeviceEnrollmentDomain">ResetDeviceEnrollmentDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDiskEncrypted">ResetDiskEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetKeyTrustLevel">ResetKeyTrustLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetManagedDevice">ResetManagedDevice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsFirewall">ResetOsFirewall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsVersion">ResetOsVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetPasswordProtectionWarningTrigger">ResetPasswordProtectionWarningTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetRealtimeUrlCheckMode">ResetRealtimeUrlCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSafeBrowsingProtectionLevel">ResetSafeBrowsingProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetScreenLockSecured">ResetScreenLockSecured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSiteIsolationEnabled">ResetSiteIsolationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetThirdPartyBlockingEnabled">ResetThirdPartyBlockingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsMachineDomain">ResetWindowsMachineDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsUserDomain">ResetWindowsUserDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBrowserVersion` <a name="PutBrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putBrowserVersion"></a>

```csharp
private void PutBrowserVersion(DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putBrowserVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersion</a>

---

##### `PutOsVersion` <a name="PutOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putOsVersion"></a>

```csharp
private void PutOsVersion(DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.putOsVersion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersion</a>

---

##### `ResetAllowScreenLock` <a name="ResetAllowScreenLock" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetAllowScreenLock"></a>

```csharp
private void ResetAllowScreenLock()
```

##### `ResetBrowserVersion` <a name="ResetBrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBrowserVersion"></a>

```csharp
private void ResetBrowserVersion()
```

##### `ResetBuiltInDnsClientEnabled` <a name="ResetBuiltInDnsClientEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetBuiltInDnsClientEnabled"></a>

```csharp
private void ResetBuiltInDnsClientEnabled()
```

##### `ResetChromeRemoteDesktopAppBlocked` <a name="ResetChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetChromeRemoteDesktopAppBlocked"></a>

```csharp
private void ResetChromeRemoteDesktopAppBlocked()
```

##### `ResetCrowdStrikeAgentId` <a name="ResetCrowdStrikeAgentId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeAgentId"></a>

```csharp
private void ResetCrowdStrikeAgentId()
```

##### `ResetCrowdStrikeCustomerId` <a name="ResetCrowdStrikeCustomerId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetCrowdStrikeCustomerId"></a>

```csharp
private void ResetCrowdStrikeCustomerId()
```

##### `ResetDeviceEnrollmentDomain` <a name="ResetDeviceEnrollmentDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDeviceEnrollmentDomain"></a>

```csharp
private void ResetDeviceEnrollmentDomain()
```

##### `ResetDiskEncrypted` <a name="ResetDiskEncrypted" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetDiskEncrypted"></a>

```csharp
private void ResetDiskEncrypted()
```

##### `ResetKeyTrustLevel` <a name="ResetKeyTrustLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetKeyTrustLevel"></a>

```csharp
private void ResetKeyTrustLevel()
```

##### `ResetManagedDevice` <a name="ResetManagedDevice" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetManagedDevice"></a>

```csharp
private void ResetManagedDevice()
```

##### `ResetOsFirewall` <a name="ResetOsFirewall" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsFirewall"></a>

```csharp
private void ResetOsFirewall()
```

##### `ResetOsVersion` <a name="ResetOsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetOsVersion"></a>

```csharp
private void ResetOsVersion()
```

##### `ResetPasswordProtectionWarningTrigger` <a name="ResetPasswordProtectionWarningTrigger" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetPasswordProtectionWarningTrigger"></a>

```csharp
private void ResetPasswordProtectionWarningTrigger()
```

##### `ResetRealtimeUrlCheckMode` <a name="ResetRealtimeUrlCheckMode" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetRealtimeUrlCheckMode"></a>

```csharp
private void ResetRealtimeUrlCheckMode()
```

##### `ResetSafeBrowsingProtectionLevel` <a name="ResetSafeBrowsingProtectionLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSafeBrowsingProtectionLevel"></a>

```csharp
private void ResetSafeBrowsingProtectionLevel()
```

##### `ResetScreenLockSecured` <a name="ResetScreenLockSecured" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetScreenLockSecured"></a>

```csharp
private void ResetScreenLockSecured()
```

##### `ResetSiteIsolationEnabled` <a name="ResetSiteIsolationEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetSiteIsolationEnabled"></a>

```csharp
private void ResetSiteIsolationEnabled()
```

##### `ResetThirdPartyBlockingEnabled` <a name="ResetThirdPartyBlockingEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetThirdPartyBlockingEnabled"></a>

```csharp
private void ResetThirdPartyBlockingEnabled()
```

##### `ResetWindowsMachineDomain` <a name="ResetWindowsMachineDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsMachineDomain"></a>

```csharp
private void ResetWindowsMachineDomain()
```

##### `ResetWindowsUserDomain` <a name="ResetWindowsUserDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.resetWindowsUserDomain"></a>

```csharp
private void ResetWindowsUserDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersion">BrowserVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersion">OsVersion</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLockInput">AllowScreenLockInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersionInput">BrowserVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabledInput">BuiltInDnsClientEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlockedInput">ChromeRemoteDesktopAppBlockedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentIdInput">CrowdStrikeAgentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerIdInput">CrowdStrikeCustomerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomainInput">DeviceEnrollmentDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncryptedInput">DiskEncryptedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevelInput">KeyTrustLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDeviceInput">ManagedDeviceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewallInput">OsFirewallInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersionInput">OsVersionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTriggerInput">PasswordProtectionWarningTriggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckModeInput">RealtimeUrlCheckModeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevelInput">SafeBrowsingProtectionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecuredInput">ScreenLockSecuredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabledInput">SiteIsolationEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabledInput">ThirdPartyBlockingEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomainInput">WindowsMachineDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomainInput">WindowsUserDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLock">AllowScreenLock</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabled">BuiltInDnsClientEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlocked">ChromeRemoteDesktopAppBlocked</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentId">CrowdStrikeAgentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerId">CrowdStrikeCustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomain">DeviceEnrollmentDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncrypted">DiskEncrypted</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevel">KeyTrustLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDevice">ManagedDevice</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewall">OsFirewall</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTrigger">PasswordProtectionWarningTrigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckMode">RealtimeUrlCheckMode</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevel">SafeBrowsingProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecured">ScreenLockSecured</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabled">SiteIsolationEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabled">ThirdPartyBlockingEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomain">WindowsMachineDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomain">WindowsUserDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BrowserVersion`<sup>Required</sup> <a name="BrowserVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersion"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference BrowserVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcBrowserVersionOutputReference</a>

---

##### `OsVersion`<sup>Required</sup> <a name="OsVersion" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersion"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference OsVersion { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOsVersionOutputReference</a>

---

##### `AllowScreenLockInput`<sup>Optional</sup> <a name="AllowScreenLockInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLockInput"></a>

```csharp
public object AllowScreenLockInput { get; }
```

- *Type:* object

---

##### `BrowserVersionInput`<sup>Optional</sup> <a name="BrowserVersionInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.browserVersionInput"></a>

```csharp
public object BrowserVersionInput { get; }
```

- *Type:* object

---

##### `BuiltInDnsClientEnabledInput`<sup>Optional</sup> <a name="BuiltInDnsClientEnabledInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabledInput"></a>

```csharp
public object BuiltInDnsClientEnabledInput { get; }
```

- *Type:* object

---

##### `ChromeRemoteDesktopAppBlockedInput`<sup>Optional</sup> <a name="ChromeRemoteDesktopAppBlockedInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlockedInput"></a>

```csharp
public object ChromeRemoteDesktopAppBlockedInput { get; }
```

- *Type:* object

---

##### `CrowdStrikeAgentIdInput`<sup>Optional</sup> <a name="CrowdStrikeAgentIdInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentIdInput"></a>

```csharp
public string CrowdStrikeAgentIdInput { get; }
```

- *Type:* string

---

##### `CrowdStrikeCustomerIdInput`<sup>Optional</sup> <a name="CrowdStrikeCustomerIdInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerIdInput"></a>

```csharp
public string CrowdStrikeCustomerIdInput { get; }
```

- *Type:* string

---

##### `DeviceEnrollmentDomainInput`<sup>Optional</sup> <a name="DeviceEnrollmentDomainInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomainInput"></a>

```csharp
public string DeviceEnrollmentDomainInput { get; }
```

- *Type:* string

---

##### `DiskEncryptedInput`<sup>Optional</sup> <a name="DiskEncryptedInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncryptedInput"></a>

```csharp
public object DiskEncryptedInput { get; }
```

- *Type:* object

---

##### `KeyTrustLevelInput`<sup>Optional</sup> <a name="KeyTrustLevelInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevelInput"></a>

```csharp
public string KeyTrustLevelInput { get; }
```

- *Type:* string

---

##### `ManagedDeviceInput`<sup>Optional</sup> <a name="ManagedDeviceInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDeviceInput"></a>

```csharp
public object ManagedDeviceInput { get; }
```

- *Type:* object

---

##### `OsFirewallInput`<sup>Optional</sup> <a name="OsFirewallInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewallInput"></a>

```csharp
public object OsFirewallInput { get; }
```

- *Type:* object

---

##### `OsVersionInput`<sup>Optional</sup> <a name="OsVersionInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osVersionInput"></a>

```csharp
public object OsVersionInput { get; }
```

- *Type:* object

---

##### `PasswordProtectionWarningTriggerInput`<sup>Optional</sup> <a name="PasswordProtectionWarningTriggerInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTriggerInput"></a>

```csharp
public string PasswordProtectionWarningTriggerInput { get; }
```

- *Type:* string

---

##### `RealtimeUrlCheckModeInput`<sup>Optional</sup> <a name="RealtimeUrlCheckModeInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckModeInput"></a>

```csharp
public object RealtimeUrlCheckModeInput { get; }
```

- *Type:* object

---

##### `SafeBrowsingProtectionLevelInput`<sup>Optional</sup> <a name="SafeBrowsingProtectionLevelInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevelInput"></a>

```csharp
public string SafeBrowsingProtectionLevelInput { get; }
```

- *Type:* string

---

##### `ScreenLockSecuredInput`<sup>Optional</sup> <a name="ScreenLockSecuredInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecuredInput"></a>

```csharp
public object ScreenLockSecuredInput { get; }
```

- *Type:* object

---

##### `SiteIsolationEnabledInput`<sup>Optional</sup> <a name="SiteIsolationEnabledInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabledInput"></a>

```csharp
public object SiteIsolationEnabledInput { get; }
```

- *Type:* object

---

##### `ThirdPartyBlockingEnabledInput`<sup>Optional</sup> <a name="ThirdPartyBlockingEnabledInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabledInput"></a>

```csharp
public object ThirdPartyBlockingEnabledInput { get; }
```

- *Type:* object

---

##### `WindowsMachineDomainInput`<sup>Optional</sup> <a name="WindowsMachineDomainInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomainInput"></a>

```csharp
public string WindowsMachineDomainInput { get; }
```

- *Type:* string

---

##### `WindowsUserDomainInput`<sup>Optional</sup> <a name="WindowsUserDomainInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomainInput"></a>

```csharp
public string WindowsUserDomainInput { get; }
```

- *Type:* string

---

##### `AllowScreenLock`<sup>Required</sup> <a name="AllowScreenLock" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.allowScreenLock"></a>

```csharp
public object AllowScreenLock { get; }
```

- *Type:* object

---

##### `BuiltInDnsClientEnabled`<sup>Required</sup> <a name="BuiltInDnsClientEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.builtInDnsClientEnabled"></a>

```csharp
public object BuiltInDnsClientEnabled { get; }
```

- *Type:* object

---

##### `ChromeRemoteDesktopAppBlocked`<sup>Required</sup> <a name="ChromeRemoteDesktopAppBlocked" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.chromeRemoteDesktopAppBlocked"></a>

```csharp
public object ChromeRemoteDesktopAppBlocked { get; }
```

- *Type:* object

---

##### `CrowdStrikeAgentId`<sup>Required</sup> <a name="CrowdStrikeAgentId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeAgentId"></a>

```csharp
public string CrowdStrikeAgentId { get; }
```

- *Type:* string

---

##### `CrowdStrikeCustomerId`<sup>Required</sup> <a name="CrowdStrikeCustomerId" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.crowdStrikeCustomerId"></a>

```csharp
public string CrowdStrikeCustomerId { get; }
```

- *Type:* string

---

##### `DeviceEnrollmentDomain`<sup>Required</sup> <a name="DeviceEnrollmentDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.deviceEnrollmentDomain"></a>

```csharp
public string DeviceEnrollmentDomain { get; }
```

- *Type:* string

---

##### `DiskEncrypted`<sup>Required</sup> <a name="DiskEncrypted" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.diskEncrypted"></a>

```csharp
public object DiskEncrypted { get; }
```

- *Type:* object

---

##### `KeyTrustLevel`<sup>Required</sup> <a name="KeyTrustLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.keyTrustLevel"></a>

```csharp
public string KeyTrustLevel { get; }
```

- *Type:* string

---

##### `ManagedDevice`<sup>Required</sup> <a name="ManagedDevice" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.managedDevice"></a>

```csharp
public object ManagedDevice { get; }
```

- *Type:* object

---

##### `OsFirewall`<sup>Required</sup> <a name="OsFirewall" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.osFirewall"></a>

```csharp
public object OsFirewall { get; }
```

- *Type:* object

---

##### `PasswordProtectionWarningTrigger`<sup>Required</sup> <a name="PasswordProtectionWarningTrigger" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.passwordProtectionWarningTrigger"></a>

```csharp
public string PasswordProtectionWarningTrigger { get; }
```

- *Type:* string

---

##### `RealtimeUrlCheckMode`<sup>Required</sup> <a name="RealtimeUrlCheckMode" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.realtimeUrlCheckMode"></a>

```csharp
public object RealtimeUrlCheckMode { get; }
```

- *Type:* object

---

##### `SafeBrowsingProtectionLevel`<sup>Required</sup> <a name="SafeBrowsingProtectionLevel" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.safeBrowsingProtectionLevel"></a>

```csharp
public string SafeBrowsingProtectionLevel { get; }
```

- *Type:* string

---

##### `ScreenLockSecured`<sup>Required</sup> <a name="ScreenLockSecured" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.screenLockSecured"></a>

```csharp
public object ScreenLockSecured { get; }
```

- *Type:* object

---

##### `SiteIsolationEnabled`<sup>Required</sup> <a name="SiteIsolationEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.siteIsolationEnabled"></a>

```csharp
public object SiteIsolationEnabled { get; }
```

- *Type:* object

---

##### `ThirdPartyBlockingEnabled`<sup>Required</sup> <a name="ThirdPartyBlockingEnabled" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.thirdPartyBlockingEnabled"></a>

```csharp
public object ThirdPartyBlockingEnabled { get; }
```

- *Type:* object

---

##### `WindowsMachineDomain`<sup>Required</sup> <a name="WindowsMachineDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsMachineDomain"></a>

```csharp
public string WindowsMachineDomain { get; }
```

- *Type:* string

---

##### `WindowsUserDomain`<sup>Required</sup> <a name="WindowsUserDomain" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.windowsUserDomain"></a>

```csharp
public string WindowsUserDomain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference <a name="DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.putDtc">PutDtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resetDtc">ResetDtc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDtc` <a name="PutDtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.putDtc"></a>

```csharp
private void PutDtc(DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.putDtc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtc</a>

---

##### `ResetDtc` <a name="ResetDtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.resetDtc"></a>

```csharp
private void ResetDtc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtc">Dtc</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtcInput">DtcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dtc`<sup>Required</sup> <a name="Dtc" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtc"></a>

```csharp
public DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference Dtc { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference">DataOktaDeviceAssurancePolicyThirdPartySignalProviderDtcOutputReference</a>

---

##### `DtcInput`<sup>Optional</sup> <a name="DtcInput" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.dtcInput"></a>

```csharp
public object DtcInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDeviceAssurancePolicy.DataOktaDeviceAssurancePolicyThirdPartySignalProviderOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



