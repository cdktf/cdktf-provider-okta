# `okta_auth_server_scope`

Refer to the Terraform Registory for docs: [`okta_auth_server_scope`](https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope).

# `authServerScope` Submodule <a name="`authServerScope` Submodule" id="@cdktf/provider-okta.authServerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuthServerScope <a name="AuthServerScope" id="@cdktf/provider-okta.authServerScope.AuthServerScope"></a>

Represents a {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope okta_auth_server_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthServerScope(Construct Scope, string Id, AuthServerScopeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig">AuthServerScopeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.authServerScope.AuthServerScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig">AuthServerScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetConsent">ResetConsent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.resetMetadataPublish">ResetMetadataPublish</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.authServerScope.AuthServerScope.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.authServerScope.AuthServerScope.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetConsent` <a name="ResetConsent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetConsent"></a>

```csharp
private void ResetConsent()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadataPublish` <a name="ResetMetadataPublish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.resetMetadataPublish"></a>

```csharp
private void ResetMetadataPublish()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerScope.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerScope.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AuthServerScope.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.authServerScope.AuthServerScope.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.systemAttribute">SystemAttribute</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerIdInput">AuthServerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.consentInput">ConsentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.defaultInput">DefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublishInput">MetadataPublishInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerId">AuthServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.consent">Consent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.default">Default</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublish">MetadataPublish</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.systemAttribute"></a>

```csharp
public IResolvable SystemAttribute { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `AuthServerIdInput`<sup>Optional</sup> <a name="AuthServerIdInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerIdInput"></a>

```csharp
public string AuthServerIdInput { get; }
```

- *Type:* string

---

##### `ConsentInput`<sup>Optional</sup> <a name="ConsentInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.consentInput"></a>

```csharp
public string ConsentInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.defaultInput"></a>

```csharp
public object DefaultInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataPublishInput`<sup>Optional</sup> <a name="MetadataPublishInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublishInput"></a>

```csharp
public string MetadataPublishInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.authServerId"></a>

```csharp
public string AuthServerId { get; }
```

- *Type:* string

---

##### `Consent`<sup>Required</sup> <a name="Consent" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.consent"></a>

```csharp
public string Consent { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.default"></a>

```csharp
public object Default { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetadataPublish`<sup>Required</sup> <a name="MetadataPublish" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.metadataPublish"></a>

```csharp
public string MetadataPublish { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScope.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.authServerScope.AuthServerScope.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuthServerScopeConfig <a name="AuthServerScopeConfig" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AuthServerScopeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthServerId,
    string Name,
    string Consent = null,
    object Default = null,
    string Description = null,
    string DisplayName = null,
    string Id = null,
    string MetadataPublish = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.authServerId">AuthServerId</a></code> | <code>string</code> | Auth server ID. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.name">Name</a></code> | <code>string</code> | Auth server scope name. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.consent">Consent</a></code> | <code>string</code> | EA Feature and thus it is simply ignored if the feature is off. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.default">Default</a></code> | <code>object</code> | A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#description AuthServerScope#description}. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Name of the end user displayed in a consent dialog box. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#id AuthServerScope#id}. |
| <code><a href="#@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.metadataPublish">MetadataPublish</a></code> | <code>string</code> | Whether to publish metadata or not, matching API type despite the fact it could just be a boolean. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthServerId`<sup>Required</sup> <a name="AuthServerId" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.authServerId"></a>

```csharp
public string AuthServerId { get; set; }
```

- *Type:* string

Auth server ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#auth_server_id AuthServerScope#auth_server_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Auth server scope name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#name AuthServerScope#name}

---

##### `Consent`<sup>Optional</sup> <a name="Consent" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.consent"></a>

```csharp
public string Consent { get; set; }
```

- *Type:* string

EA Feature and thus it is simply ignored if the feature is off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#consent AuthServerScope#consent}

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.default"></a>

```csharp
public object Default { get; set; }
```

- *Type:* object

A default scope will be returned in an access token when the client omits the scope parameter in a token request, provided this scope is allowed as part of the access policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#default AuthServerScope#default}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#description AuthServerScope#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Name of the end user displayed in a consent dialog box.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#display_name AuthServerScope#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#id AuthServerScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetadataPublish`<sup>Optional</sup> <a name="MetadataPublish" id="@cdktf/provider-okta.authServerScope.AuthServerScopeConfig.property.metadataPublish"></a>

```csharp
public string MetadataPublish { get; set; }
```

- *Type:* string

Whether to publish metadata or not, matching API type despite the fact it could just be a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/4.2.0/docs/resources/auth_server_scope#metadata_publish AuthServerScope#metadata_publish}

---



