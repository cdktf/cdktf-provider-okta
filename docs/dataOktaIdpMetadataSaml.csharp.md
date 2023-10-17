# `data_okta_idp_metadata_saml`

Refer to the Terraform Registory for docs: [`data_okta_idp_metadata_saml`](https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/idp_metadata_saml).

# `dataOktaIdpMetadataSaml` Submodule <a name="`dataOktaIdpMetadataSaml` Submodule" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOktaIdpMetadataSaml <a name="DataOktaIdpMetadataSaml" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/idp_metadata_saml okta_idp_metadata_saml}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaIdpMetadataSaml(Construct Scope, string Id, DataOktaIdpMetadataSamlConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig">DataOktaIdpMetadataSamlConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig">DataOktaIdpMetadataSamlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetIdpId">ResetIdpId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIdpId` <a name="ResetIdpId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.resetIdpId"></a>

```csharp
private void ResetIdpId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOktaIdpMetadataSaml resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpMetadataSaml.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpMetadataSaml.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpMetadataSaml.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

DataOktaIdpMetadataSaml.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOktaIdpMetadataSaml resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOktaIdpMetadataSaml to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOktaIdpMetadataSaml that should be imported.

Refer to the {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/idp_metadata_saml#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOktaIdpMetadataSaml to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.assertionsSigned">AssertionsSigned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.authnRequestSigned">AuthnRequestSigned</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.encryptionCertificate">EncryptionCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.entityId">EntityId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpPostBinding">HttpPostBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpRedirectBinding">HttpRedirectBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.metadata">Metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.signingCertificate">SigningCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpIdInput">IdpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpId">IdpId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AssertionsSigned`<sup>Required</sup> <a name="AssertionsSigned" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.assertionsSigned"></a>

```csharp
public IResolvable AssertionsSigned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AuthnRequestSigned`<sup>Required</sup> <a name="AuthnRequestSigned" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.authnRequestSigned"></a>

```csharp
public IResolvable AuthnRequestSigned { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EncryptionCertificate`<sup>Required</sup> <a name="EncryptionCertificate" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.encryptionCertificate"></a>

```csharp
public string EncryptionCertificate { get; }
```

- *Type:* string

---

##### `EntityId`<sup>Required</sup> <a name="EntityId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.entityId"></a>

```csharp
public string EntityId { get; }
```

- *Type:* string

---

##### `HttpPostBinding`<sup>Required</sup> <a name="HttpPostBinding" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpPostBinding"></a>

```csharp
public string HttpPostBinding { get; }
```

- *Type:* string

---

##### `HttpRedirectBinding`<sup>Required</sup> <a name="HttpRedirectBinding" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.httpRedirectBinding"></a>

```csharp
public string HttpRedirectBinding { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.metadata"></a>

```csharp
public string Metadata { get; }
```

- *Type:* string

---

##### `SigningCertificate`<sup>Required</sup> <a name="SigningCertificate" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.signingCertificate"></a>

```csharp
public string SigningCertificate { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpIdInput`<sup>Optional</sup> <a name="IdpIdInput" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpIdInput"></a>

```csharp
public string IdpIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdpId`<sup>Required</sup> <a name="IdpId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.idpId"></a>

```csharp
public string IdpId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSaml.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOktaIdpMetadataSamlConfig <a name="DataOktaIdpMetadataSamlConfig" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new DataOktaIdpMetadataSamlConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string IdpId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}. |
| <code><a href="#@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.idpId">IdpId</a></code> | <code>string</code> | The id of the IdP to retrieve metadata for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/idp_metadata_saml#id DataOktaIdpMetadataSaml#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IdpId`<sup>Optional</sup> <a name="IdpId" id="@cdktf/provider-okta.dataOktaIdpMetadataSaml.DataOktaIdpMetadataSamlConfig.property.idpId"></a>

```csharp
public string IdpId { get; set; }
```

- *Type:* string

The id of the IdP to retrieve metadata for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.4.3/docs/data-sources/idp_metadata_saml#idp_id DataOktaIdpMetadataSaml#idp_id}

---



