# `data_okta_email_customizations`

Refer to the Terraform Registory for docs: [`data_okta_email_customizations`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations).

# `dataOktaEmailCustomizations` Submodule <a name="`dataOktaEmailCustomizations` Submodule" id="@cdktf/provider-okta.dataOktaEmailCustomizations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaEmailCustomizations <a name="DataOktaEmailCustomizations" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations okta_email_customizations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaEmailCustomizations(Construct Scope, string Id, DataOktaEmailCustomizationsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig">DataOktaEmailCustomizationsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig">DataOktaEmailCustomizationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaEmailCustomizations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaEmailCustomizations.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaEmailCustomizations.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaEmailCustomizations.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaEmailCustomizations.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaEmailCustomizations resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaEmailCustomizations to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaEmailCustomizations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaEmailCustomizations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.emailCustomizations">EmailCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList">DataOktaEmailCustomizationsEmailCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateNameInput">TemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateName">TemplateName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `EmailCustomizations`<sup>Required</sup> <a name="EmailCustomizations" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.emailCustomizations"></a>

```csharp
public DataOktaEmailCustomizationsEmailCustomizationsList EmailCustomizations { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList">DataOktaEmailCustomizationsEmailCustomizationsList</a>

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateNameInput"></a>

```csharp
public string TemplateNameInput { get; }
```

- *Type:* string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.templateName"></a>

```csharp
public string TemplateName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizations.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaEmailCustomizationsConfig <a name="DataOktaEmailCustomizationsConfig" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaEmailCustomizationsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BrandId,
    string TemplateName,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.brandId">BrandId</a></code> | <code>string</code> | Brand ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.templateName">TemplateName</a></code> | <code>string</code> | Template Name. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#id DataOktaEmailCustomizations#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

Brand ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#brand_id DataOktaEmailCustomizations#brand_id}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.templateName"></a>

```csharp
public string TemplateName { get; set; }
```

- *Type:* string

Template Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#template_name DataOktaEmailCustomizations#template_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/email_customizations#id DataOktaEmailCustomizations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOktaEmailCustomizationsEmailCustomizations <a name="DataOktaEmailCustomizationsEmailCustomizations" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaEmailCustomizationsEmailCustomizations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaEmailCustomizationsEmailCustomizationsList <a name="DataOktaEmailCustomizationsEmailCustomizationsList" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaEmailCustomizationsEmailCustomizationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.get"></a>

```csharp
private DataOktaEmailCustomizationsEmailCustomizationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOktaEmailCustomizationsEmailCustomizationsOutputReference <a name="DataOktaEmailCustomizationsEmailCustomizationsOutputReference" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaEmailCustomizationsEmailCustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.links">Links</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.subject">Subject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations">DataOktaEmailCustomizationsEmailCustomizations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `Links`<sup>Required</sup> <a name="Links" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.links"></a>

```csharp
public string Links { get; }
```

- *Type:* string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.subject"></a>

```csharp
public string Subject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizationsOutputReference.property.internalValue"></a>

```csharp
public DataOktaEmailCustomizationsEmailCustomizations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaEmailCustomizations.DataOktaEmailCustomizationsEmailCustomizations">DataOktaEmailCustomizationsEmailCustomizations</a>

---



