# `dataOktaDefaultSigninPage` Submodule <a name="`dataOktaDefaultSigninPage` Submodule" id="@cdktf/provider-okta.dataOktaDefaultSigninPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaDefaultSigninPage <a name="DataOktaDefaultSigninPage" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/data-sources/default_signin_page okta_default_signin_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDefaultSigninPage(Construct Scope, string Id, DataOktaDefaultSigninPageConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig">DataOktaDefaultSigninPageConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig">DataOktaDefaultSigninPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaDefaultSigninPage resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDefaultSigninPage.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDefaultSigninPage.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDefaultSigninPage.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaDefaultSigninPage.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaDefaultSigninPage resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaDefaultSigninPage to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaDefaultSigninPage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/data-sources/default_signin_page#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaDefaultSigninPage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.contentSecurityPolicySetting">ContentSecurityPolicySetting</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference">DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.pageContent">PageContent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.widgetCustomizations">WidgetCustomizations</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference">DataOktaDefaultSigninPageWidgetCustomizationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.widgetVersion">WidgetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.brandIdInput">BrandIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.brandId">BrandId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ContentSecurityPolicySetting`<sup>Required</sup> <a name="ContentSecurityPolicySetting" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.contentSecurityPolicySetting"></a>

```csharp
public DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference ContentSecurityPolicySetting { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference">DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PageContent`<sup>Required</sup> <a name="PageContent" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.pageContent"></a>

```csharp
public string PageContent { get; }
```

- *Type:* string

---

##### `WidgetCustomizations`<sup>Required</sup> <a name="WidgetCustomizations" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.widgetCustomizations"></a>

```csharp
public DataOktaDefaultSigninPageWidgetCustomizationsOutputReference WidgetCustomizations { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference">DataOktaDefaultSigninPageWidgetCustomizationsOutputReference</a>

---

##### `WidgetVersion`<sup>Required</sup> <a name="WidgetVersion" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.widgetVersion"></a>

```csharp
public string WidgetVersion { get; }
```

- *Type:* string

---

##### `BrandIdInput`<sup>Optional</sup> <a name="BrandIdInput" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.brandIdInput"></a>

```csharp
public string BrandIdInput { get; }
```

- *Type:* string

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.brandId"></a>

```csharp
public string BrandId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPage.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaDefaultSigninPageConfig <a name="DataOktaDefaultSigninPageConfig" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDefaultSigninPageConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BrandId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.brandId">BrandId</a></code> | <code>string</code> | brand id of the preview signin page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BrandId`<sup>Required</sup> <a name="BrandId" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageConfig.property.brandId"></a>

```csharp
public string BrandId { get; set; }
```

- *Type:* string

brand id of the preview signin page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.19.0/docs/data-sources/default_signin_page#brand_id DataOktaDefaultSigninPage#brand_id}

---

### DataOktaDefaultSigninPageContentSecurityPolicySetting <a name="DataOktaDefaultSigninPageContentSecurityPolicySetting" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDefaultSigninPageContentSecurityPolicySetting {

};
```


### DataOktaDefaultSigninPageWidgetCustomizations <a name="DataOktaDefaultSigninPageWidgetCustomizations" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDefaultSigninPageWidgetCustomizations {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference <a name="DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.reportUri">ReportUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.srcList">SrcList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `ReportUri`<sup>Required</sup> <a name="ReportUri" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.reportUri"></a>

```csharp
public string ReportUri { get; }
```

- *Type:* string

---

##### `SrcList`<sup>Required</sup> <a name="SrcList" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.srcList"></a>

```csharp
public string[] SrcList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageContentSecurityPolicySettingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOktaDefaultSigninPageWidgetCustomizationsOutputReference <a name="DataOktaDefaultSigninPageWidgetCustomizationsOutputReference" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaDefaultSigninPageWidgetCustomizationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel">AuthenticatorPageCustomLinkLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl">AuthenticatorPageCustomLinkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel">ClassicRecoveryFlowEmailOrUsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink1Label">CustomLink1Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink1Url">CustomLink1Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink2Label">CustomLink2Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink2Url">CustomLink2Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel">ForgotPasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl">ForgotPasswordUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.helpLabel">HelpLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.helpUrl">HelpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip">PasswordInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.passwordLabel">PasswordLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle">ShowPasswordVisibilityToggle</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier">ShowUserIdentifier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.signInLabel">SignInLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel">UnlockAccountLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl">UnlockAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip">UsernameInfoTip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.usernameLabel">UsernameLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration">WidgetGeneration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkLabel`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkLabel"></a>

```csharp
public string AuthenticatorPageCustomLinkLabel { get; }
```

- *Type:* string

---

##### `AuthenticatorPageCustomLinkUrl`<sup>Required</sup> <a name="AuthenticatorPageCustomLinkUrl" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.authenticatorPageCustomLinkUrl"></a>

```csharp
public string AuthenticatorPageCustomLinkUrl { get; }
```

- *Type:* string

---

##### `ClassicRecoveryFlowEmailOrUsernameLabel`<sup>Required</sup> <a name="ClassicRecoveryFlowEmailOrUsernameLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.classicRecoveryFlowEmailOrUsernameLabel"></a>

```csharp
public string ClassicRecoveryFlowEmailOrUsernameLabel { get; }
```

- *Type:* string

---

##### `CustomLink1Label`<sup>Required</sup> <a name="CustomLink1Label" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink1Label"></a>

```csharp
public string CustomLink1Label { get; }
```

- *Type:* string

---

##### `CustomLink1Url`<sup>Required</sup> <a name="CustomLink1Url" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink1Url"></a>

```csharp
public string CustomLink1Url { get; }
```

- *Type:* string

---

##### `CustomLink2Label`<sup>Required</sup> <a name="CustomLink2Label" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink2Label"></a>

```csharp
public string CustomLink2Label { get; }
```

- *Type:* string

---

##### `CustomLink2Url`<sup>Required</sup> <a name="CustomLink2Url" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.customLink2Url"></a>

```csharp
public string CustomLink2Url { get; }
```

- *Type:* string

---

##### `ForgotPasswordLabel`<sup>Required</sup> <a name="ForgotPasswordLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordLabel"></a>

```csharp
public string ForgotPasswordLabel { get; }
```

- *Type:* string

---

##### `ForgotPasswordUrl`<sup>Required</sup> <a name="ForgotPasswordUrl" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.forgotPasswordUrl"></a>

```csharp
public string ForgotPasswordUrl { get; }
```

- *Type:* string

---

##### `HelpLabel`<sup>Required</sup> <a name="HelpLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.helpLabel"></a>

```csharp
public string HelpLabel { get; }
```

- *Type:* string

---

##### `HelpUrl`<sup>Required</sup> <a name="HelpUrl" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.helpUrl"></a>

```csharp
public string HelpUrl { get; }
```

- *Type:* string

---

##### `PasswordInfoTip`<sup>Required</sup> <a name="PasswordInfoTip" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.passwordInfoTip"></a>

```csharp
public string PasswordInfoTip { get; }
```

- *Type:* string

---

##### `PasswordLabel`<sup>Required</sup> <a name="PasswordLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.passwordLabel"></a>

```csharp
public string PasswordLabel { get; }
```

- *Type:* string

---

##### `ShowPasswordVisibilityToggle`<sup>Required</sup> <a name="ShowPasswordVisibilityToggle" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.showPasswordVisibilityToggle"></a>

```csharp
public IResolvable ShowPasswordVisibilityToggle { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ShowUserIdentifier`<sup>Required</sup> <a name="ShowUserIdentifier" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.showUserIdentifier"></a>

```csharp
public IResolvable ShowUserIdentifier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SignInLabel`<sup>Required</sup> <a name="SignInLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.signInLabel"></a>

```csharp
public string SignInLabel { get; }
```

- *Type:* string

---

##### `UnlockAccountLabel`<sup>Required</sup> <a name="UnlockAccountLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.unlockAccountLabel"></a>

```csharp
public string UnlockAccountLabel { get; }
```

- *Type:* string

---

##### `UnlockAccountUrl`<sup>Required</sup> <a name="UnlockAccountUrl" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.unlockAccountUrl"></a>

```csharp
public string UnlockAccountUrl { get; }
```

- *Type:* string

---

##### `UsernameInfoTip`<sup>Required</sup> <a name="UsernameInfoTip" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.usernameInfoTip"></a>

```csharp
public string UsernameInfoTip { get; }
```

- *Type:* string

---

##### `UsernameLabel`<sup>Required</sup> <a name="UsernameLabel" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.usernameLabel"></a>

```csharp
public string UsernameLabel { get; }
```

- *Type:* string

---

##### `WidgetGeneration`<sup>Required</sup> <a name="WidgetGeneration" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.widgetGeneration"></a>

```csharp
public string WidgetGeneration { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.dataOktaDefaultSigninPage.DataOktaDefaultSigninPageWidgetCustomizationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



