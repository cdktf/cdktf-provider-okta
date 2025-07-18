# `dataOktaIdpSaml` Submodule <a name="`dataOktaIdpSaml` Submodule" id="@cdktf/provider-okta.dataOktaIdpSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpSaml <a name="DataOktaIdpSaml" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/idp_saml okta_idp_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaIdpSaml(Construct Scope, string Id, DataOktaIdpSamlConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig">DataOktaIdpSamlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig">DataOktaIdpSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaIdpSaml resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSaml.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSaml.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSaml.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpSaml.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaIdpSaml resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaIdpSaml to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaIdpSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/idp_saml#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaIdpSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.acsBinding">AcsBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.acsType">AcsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.issuerMode">IssuerMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.kid">Kid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.ssoBinding">SsoBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.ssoDestination">SsoDestination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.ssoUrl">SsoUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.subjectFilter">SubjectFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.subjectFormat">SubjectFormat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AcsBinding`<sup>Required</sup> <a name="AcsBinding" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.acsBinding"></a>

```csharp
public string AcsBinding { get; }
```

- *Type:* string

---

##### `AcsType`<sup>Required</sup> <a name="AcsType" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.acsType"></a>

```csharp
public string AcsType { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `IssuerMode`<sup>Required</sup> <a name="IssuerMode" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.issuerMode"></a>

```csharp
public string IssuerMode { get; }
```

- *Type:* string

---

##### `Kid`<sup>Required</sup> <a name="Kid" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.kid"></a>

```csharp
public string Kid { get; }
```

- *Type:* string

---

##### `SsoBinding`<sup>Required</sup> <a name="SsoBinding" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.ssoBinding"></a>

```csharp
public string SsoBinding { get; }
```

- *Type:* string

---

##### `SsoDestination`<sup>Required</sup> <a name="SsoDestination" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.ssoDestination"></a>

```csharp
public string SsoDestination { get; }
```

- *Type:* string

---

##### `SsoUrl`<sup>Required</sup> <a name="SsoUrl" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.ssoUrl"></a>

```csharp
public string SsoUrl { get; }
```

- *Type:* string

---

##### `SubjectFilter`<sup>Required</sup> <a name="SubjectFilter" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.subjectFilter"></a>

```csharp
public string SubjectFilter { get; }
```

- *Type:* string

---

##### `SubjectFormat`<sup>Required</sup> <a name="SubjectFormat" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.subjectFormat"></a>

```csharp
public string[] SubjectFormat { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSaml.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpSamlConfig <a name="DataOktaIdpSamlConfig" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaIdpSamlConfig {
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
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.id">Id</a></code> | <code>string</code> | Id of idp. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.name">Name</a></code> | <code>string</code> | Name of the idp. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Id of idp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/idp_saml#id DataOktaIdpSaml#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-okta.dataOktaIdpSaml.DataOktaIdpSamlConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the idp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.20.0/docs/data-sources/idp_saml#name DataOktaIdpSaml#name}

---



