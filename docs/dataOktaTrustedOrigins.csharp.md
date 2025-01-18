# `dataOktaTrustedOrigins` Submodule <a name="`dataOktaTrustedOrigins` Submodule" id="@cdktf/provider-okta.dataOktaTrustedOrigins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaTrustedOrigins <a name="DataOktaTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/trusted_origins okta_trusted_origins}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaTrustedOrigins(Construct Scope, string Id, DataOktaTrustedOriginsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig">DataOktaTrustedOriginsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig">DataOktaTrustedOriginsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaTrustedOrigins resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaTrustedOrigins.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaTrustedOrigins.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaTrustedOrigins.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaTrustedOrigins.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaTrustedOrigins resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaTrustedOrigins to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaTrustedOrigins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/trusted_origins#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaTrustedOrigins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins">TrustedOrigins</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `TrustedOrigins`<sup>Required</sup> <a name="TrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.trustedOrigins"></a>

```csharp
public DataOktaTrustedOriginsTrustedOriginsList TrustedOrigins { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList">DataOktaTrustedOriginsTrustedOriginsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOrigins.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaTrustedOriginsConfig <a name="DataOktaTrustedOriginsConfig" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaTrustedOriginsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter">Filter</a></code> | <code>string</code> | Filter criteria. Filter value will be URL-encoded by the provider. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter criteria. Filter value will be URL-encoded by the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/trusted_origins#filter DataOktaTrustedOrigins#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.13.0/docs/data-sources/trusted_origins#id DataOktaTrustedOrigins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaTrustedOriginsTrustedOrigins <a name="DataOktaTrustedOriginsTrustedOrigins" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaTrustedOriginsTrustedOrigins {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaTrustedOriginsTrustedOriginsList <a name="DataOktaTrustedOriginsTrustedOriginsList" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaTrustedOriginsTrustedOriginsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get"></a>

```csharp
private DataOktaTrustedOriginsTrustedOriginsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOktaTrustedOriginsTrustedOriginsOutputReference <a name="DataOktaTrustedOriginsTrustedOriginsOutputReference" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaTrustedOriginsTrustedOriginsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin">Origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.origin"></a>

```csharp
public string Origin { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOriginsOutputReference.property.internalValue"></a>

```csharp
public DataOktaTrustedOriginsTrustedOrigins InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaTrustedOrigins.DataOktaTrustedOriginsTrustedOrigins">DataOktaTrustedOriginsTrustedOrigins</a>

---



