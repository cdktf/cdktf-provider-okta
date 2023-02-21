# `userBaseSchemaProperty` Submodule <a name="`userBaseSchemaProperty` Submodule" id="@cdktf/provider-okta.userBaseSchemaProperty"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UserBaseSchemaProperty <a name="UserBaseSchemaProperty" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property okta_user_base_schema_property}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserBaseSchemaProperty(Construct Scope, string Id, UserBaseSchemaPropertyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig">UserBaseSchemaPropertyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig">UserBaseSchemaPropertyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetMaster"></a>

```csharp
private void ResetMaster()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.resetUserType"></a>

```csharp
private void ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

UserBaseSchemaProperty.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

UserBaseSchemaProperty.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

UserBaseSchemaProperty.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.masterInput">MasterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.master">Master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userType">UserType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.masterInput"></a>

```csharp
public string MasterInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.master"></a>

```csharp
public string Master { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaProperty.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### UserBaseSchemaPropertyConfig <a name="UserBaseSchemaPropertyConfig" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new UserBaseSchemaPropertyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Index,
    string Title,
    string Type,
    string Id = null,
    string Master = null,
    string Pattern = null,
    string Permissions = null,
    object Required = null,
    string UserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.index">Index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.title">Title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.type">Type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#id UserBaseSchemaProperty#id}. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.master">Master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.pattern">Pattern</a></code> | <code>string</code> | The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.permissions">Permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.required">Required</a></code> | <code>object</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.userType">UserType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#index UserBaseSchemaProperty#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#title UserBaseSchemaProperty#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#type UserBaseSchemaProperty#type}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#id UserBaseSchemaProperty#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.master"></a>

```csharp
public string Master { get; set; }
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#master UserBaseSchemaProperty#master}

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

The validation pattern to use for the subschema. Must be in form of '.+', or '[<pattern>]+' if present.'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#pattern UserBaseSchemaProperty#pattern}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#permissions UserBaseSchemaProperty#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#required UserBaseSchemaProperty#required}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.userBaseSchemaProperty.UserBaseSchemaPropertyConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/user_base_schema_property#user_type UserBaseSchemaProperty#user_type}

---



