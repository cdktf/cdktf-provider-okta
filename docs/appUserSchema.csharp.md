# `appUserSchema` Submodule <a name="`appUserSchema` Submodule" id="@cdktf/provider-okta.appUserSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppUserSchema <a name="AppUserSchema" id="@cdktf/provider-okta.appUserSchema.AppUserSchema"></a>

Represents a {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema okta_app_user_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchema(Construct Scope, string Id, AppUserSchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig">AppUserSchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig">AppUserSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf">PutArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf">PutOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum">ResetArrayEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf">ResetArrayOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType">ResetArrayType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName">ResetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace">ResetExternalNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster">ResetMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength">ResetMinLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf">ResetOneOf</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions">ResetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion">ResetUnion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique">ResetUnique</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType">ResetUserType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutArrayOneOf` <a name="PutArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf"></a>

```csharp
private void PutArrayOneOf(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putArrayOneOf.parameter.value"></a>

- *Type:* object

---

##### `PutOneOf` <a name="PutOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf"></a>

```csharp
private void PutOneOf(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.putOneOf.parameter.value"></a>

- *Type:* object

---

##### `ResetArrayEnum` <a name="ResetArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayEnum"></a>

```csharp
private void ResetArrayEnum()
```

##### `ResetArrayOneOf` <a name="ResetArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayOneOf"></a>

```csharp
private void ResetArrayOneOf()
```

##### `ResetArrayType` <a name="ResetArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetArrayType"></a>

```csharp
private void ResetArrayType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetExternalName` <a name="ResetExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalName"></a>

```csharp
private void ResetExternalName()
```

##### `ResetExternalNamespace` <a name="ResetExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetExternalNamespace"></a>

```csharp
private void ResetExternalNamespace()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaster` <a name="ResetMaster" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaster"></a>

```csharp
private void ResetMaster()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMaxLength"></a>

```csharp
private void ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetMinLength"></a>

```csharp
private void ResetMinLength()
```

##### `ResetOneOf` <a name="ResetOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetOneOf"></a>

```csharp
private void ResetOneOf()
```

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetPermissions"></a>

```csharp
private void ResetPermissions()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetUnion` <a name="ResetUnion" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnion"></a>

```csharp
private void ResetUnion()
```

##### `ResetUnique` <a name="ResetUnique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUnique"></a>

```csharp
private void ResetUnique()
```

##### `ResetUserType` <a name="ResetUserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.resetUserType"></a>

```csharp
private void ResetUserType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserSchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserSchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

AppUserSchema.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf">ArrayOneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf">OneOf</a></code> | <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput">ArrayEnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput">ArrayOneOfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput">ArrayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput">EnumInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput">ExternalNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput">ExternalNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput">IndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput">MasterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput">MaxLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput">MinLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput">OneOfInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput">PermissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput">RequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput">UnionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput">UniqueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput">UserTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum">ArrayEnum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType">ArrayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum">Enum</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName">ExternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace">ExternalNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index">Index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master">Master</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength">MaxLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength">MinLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions">Permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required">Required</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union">Union</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique">Unique</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType">UserType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ArrayOneOf`<sup>Required</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOf"></a>

```csharp
public AppUserSchemaArrayOneOfList ArrayOneOf { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList">AppUserSchemaArrayOneOfList</a>

---

##### `OneOf`<sup>Required</sup> <a name="OneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOf"></a>

```csharp
public AppUserSchemaOneOfList OneOf { get; }
```

- *Type:* <a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList">AppUserSchemaOneOfList</a>

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `ArrayEnumInput`<sup>Optional</sup> <a name="ArrayEnumInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnumInput"></a>

```csharp
public string[] ArrayEnumInput { get; }
```

- *Type:* string[]

---

##### `ArrayOneOfInput`<sup>Optional</sup> <a name="ArrayOneOfInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayOneOfInput"></a>

```csharp
public object ArrayOneOfInput { get; }
```

- *Type:* object

---

##### `ArrayTypeInput`<sup>Optional</sup> <a name="ArrayTypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayTypeInput"></a>

```csharp
public string ArrayTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enumInput"></a>

```csharp
public string[] EnumInput { get; }
```

- *Type:* string[]

---

##### `ExternalNameInput`<sup>Optional</sup> <a name="ExternalNameInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNameInput"></a>

```csharp
public string ExternalNameInput { get; }
```

- *Type:* string

---

##### `ExternalNamespaceInput`<sup>Optional</sup> <a name="ExternalNamespaceInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespaceInput"></a>

```csharp
public string ExternalNamespaceInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.indexInput"></a>

```csharp
public string IndexInput { get; }
```

- *Type:* string

---

##### `MasterInput`<sup>Optional</sup> <a name="MasterInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.masterInput"></a>

```csharp
public string MasterInput { get; }
```

- *Type:* string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLengthInput"></a>

```csharp
public double MaxLengthInput { get; }
```

- *Type:* double

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLengthInput"></a>

```csharp
public double MinLengthInput { get; }
```

- *Type:* double

---

##### `OneOfInput`<sup>Optional</sup> <a name="OneOfInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.oneOfInput"></a>

```csharp
public object OneOfInput { get; }
```

- *Type:* object

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissionsInput"></a>

```csharp
public string PermissionsInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.requiredInput"></a>

```csharp
public object RequiredInput { get; }
```

- *Type:* object

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnionInput`<sup>Optional</sup> <a name="UnionInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unionInput"></a>

```csharp
public object UnionInput { get; }
```

- *Type:* object

---

##### `UniqueInput`<sup>Optional</sup> <a name="UniqueInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.uniqueInput"></a>

```csharp
public string UniqueInput { get; }
```

- *Type:* string

---

##### `UserTypeInput`<sup>Optional</sup> <a name="UserTypeInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userTypeInput"></a>

```csharp
public string UserTypeInput { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `ArrayEnum`<sup>Required</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayEnum"></a>

```csharp
public string[] ArrayEnum { get; }
```

- *Type:* string[]

---

##### `ArrayType`<sup>Required</sup> <a name="ArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.arrayType"></a>

```csharp
public string ArrayType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.enum"></a>

```csharp
public string[] Enum { get; }
```

- *Type:* string[]

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalName"></a>

```csharp
public string ExternalName { get; }
```

- *Type:* string

---

##### `ExternalNamespace`<sup>Required</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.externalNamespace"></a>

```csharp
public string ExternalNamespace { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.index"></a>

```csharp
public string Index { get; }
```

- *Type:* string

---

##### `Master`<sup>Required</sup> <a name="Master" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.master"></a>

```csharp
public string Master { get; }
```

- *Type:* string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.maxLength"></a>

```csharp
public double MaxLength { get; }
```

- *Type:* double

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.minLength"></a>

```csharp
public double MinLength { get; }
```

- *Type:* double

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.permissions"></a>

```csharp
public string Permissions { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.required"></a>

```csharp
public object Required { get; }
```

- *Type:* object

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Union`<sup>Required</sup> <a name="Union" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.union"></a>

```csharp
public object Union { get; }
```

- *Type:* object

---

##### `Unique`<sup>Required</sup> <a name="Unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.unique"></a>

```csharp
public string Unique { get; }
```

- *Type:* string

---

##### `UserType`<sup>Required</sup> <a name="UserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.userType"></a>

```csharp
public string UserType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-okta.appUserSchema.AppUserSchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppUserSchemaArrayOneOf <a name="AppUserSchemaArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaArrayOneOf {
    string Const,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const">Const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title">Title</a></code> | <code>string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.const"></a>

```csharp
public string Const { get; set; }
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#const AppUserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOf.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

### AppUserSchemaConfig <a name="AppUserSchemaConfig" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AppId,
    string Index,
    string Title,
    string Type,
    string[] ArrayEnum = null,
    object ArrayOneOf = null,
    string ArrayType = null,
    string Description = null,
    string[] Enum = null,
    string ExternalName = null,
    string ExternalNamespace = null,
    string Id = null,
    string Master = null,
    double MaxLength = null,
    double MinLength = null,
    object OneOf = null,
    string Permissions = null,
    object Required = null,
    string Scope = null,
    object Union = null,
    string Unique = null,
    string UserType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId">AppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#app_id AppUserSchema#app_id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index">Index</a></code> | <code>string</code> | Subschema unique string identifier. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title">Title</a></code> | <code>string</code> | Subschema title (display name). |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type">Type</a></code> | <code>string</code> | Subschema type: string, boolean, number, integer, array, or object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum">ArrayEnum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of a property of type array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf">ArrayOneOf</a></code> | <code>object</code> | array_one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType">ArrayType</a></code> | <code>string</code> | Subschema array type: string, number, integer, reference. Type field must be an array. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description">Description</a></code> | <code>string</code> | Custom Subschema description. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum">Enum</a></code> | <code>string[]</code> | Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName">ExternalName</a></code> | <code>string</code> | Subschema external name. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace">ExternalNamespace</a></code> | <code>string</code> | Subschema external namespace. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#id AppUserSchema#id}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master">Master</a></code> | <code>string</code> | SubSchema profile manager, if not set it will inherit its setting. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength">MaxLength</a></code> | <code>double</code> | Subschema of type string maximum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength">MinLength</a></code> | <code>double</code> | Subschema of type string minimum length. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf">OneOf</a></code> | <code>object</code> | one_of block. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions">Permissions</a></code> | <code>string</code> | SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required">Required</a></code> | <code>object</code> | Whether the subschema is required. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#scope AppUserSchema#scope}. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union">Union</a></code> | <code>object</code> | Allows to assign attribute's group priority. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique">Unique</a></code> | <code>string</code> | Subschema unique restriction. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType">UserType</a></code> | <code>string</code> | Custom subschema user type. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#app_id AppUserSchema#app_id}.

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.index"></a>

```csharp
public string Index { get; set; }
```

- *Type:* string

Subschema unique string identifier.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#index AppUserSchema#index}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Subschema title (display name).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Subschema type: string, boolean, number, integer, array, or object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#type AppUserSchema#type}

---

##### `ArrayEnum`<sup>Optional</sup> <a name="ArrayEnum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayEnum"></a>

```csharp
public string[] ArrayEnum { get; set; }
```

- *Type:* string[]

Custom Subschema enumerated value of a property of type array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_enum AppUserSchema#array_enum}

---

##### `ArrayOneOf`<sup>Optional</sup> <a name="ArrayOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayOneOf"></a>

```csharp
public object ArrayOneOf { get; set; }
```

- *Type:* object

array_one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_one_of AppUserSchema#array_one_of}

---

##### `ArrayType`<sup>Optional</sup> <a name="ArrayType" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.arrayType"></a>

```csharp
public string ArrayType { get; set; }
```

- *Type:* string

Subschema array type: string, number, integer, reference. Type field must be an array.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#array_type AppUserSchema#array_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Custom Subschema description.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#description AppUserSchema#description}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.enum"></a>

```csharp
public string[] Enum { get; set; }
```

- *Type:* string[]

Custom Subschema enumerated value of the property. see: developer.okta.com/docs/api/resources/schemas#user-profile-schema-property-object.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#enum AppUserSchema#enum}

---

##### `ExternalName`<sup>Optional</sup> <a name="ExternalName" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalName"></a>

```csharp
public string ExternalName { get; set; }
```

- *Type:* string

Subschema external name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#external_name AppUserSchema#external_name}

---

##### `ExternalNamespace`<sup>Optional</sup> <a name="ExternalNamespace" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.externalNamespace"></a>

```csharp
public string ExternalNamespace { get; set; }
```

- *Type:* string

Subschema external namespace.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#external_namespace AppUserSchema#external_namespace}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#id AppUserSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Master`<sup>Optional</sup> <a name="Master" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.master"></a>

```csharp
public string Master { get; set; }
```

- *Type:* string

SubSchema profile manager, if not set it will inherit its setting.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#master AppUserSchema#master}

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.maxLength"></a>

```csharp
public double MaxLength { get; set; }
```

- *Type:* double

Subschema of type string maximum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#max_length AppUserSchema#max_length}

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.minLength"></a>

```csharp
public double MinLength { get; set; }
```

- *Type:* double

Subschema of type string minimum length.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#min_length AppUserSchema#min_length}

---

##### `OneOf`<sup>Optional</sup> <a name="OneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.oneOf"></a>

```csharp
public object OneOf { get; set; }
```

- *Type:* object

one_of block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#one_of AppUserSchema#one_of}

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.permissions"></a>

```csharp
public string Permissions { get; set; }
```

- *Type:* string

SubSchema permissions: HIDE, READ_ONLY, or READ_WRITE.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#permissions AppUserSchema#permissions}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.required"></a>

```csharp
public object Required { get; set; }
```

- *Type:* object

Whether the subschema is required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#required AppUserSchema#required}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#scope AppUserSchema#scope}.

---

##### `Union`<sup>Optional</sup> <a name="Union" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.union"></a>

```csharp
public object Union { get; set; }
```

- *Type:* object

Allows to assign attribute's group priority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#union AppUserSchema#union}

---

##### `Unique`<sup>Optional</sup> <a name="Unique" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.unique"></a>

```csharp
public string Unique { get; set; }
```

- *Type:* string

Subschema unique restriction.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#unique AppUserSchema#unique}

---

##### `UserType`<sup>Optional</sup> <a name="UserType" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaConfig.property.userType"></a>

```csharp
public string UserType { get; set; }
```

- *Type:* string

Custom subschema user type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#user_type AppUserSchema#user_type}

---

### AppUserSchemaOneOf <a name="AppUserSchemaOneOf" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaOneOf {
    string Const,
    string Title
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const">Const</a></code> | <code>string</code> | Enum value. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title">Title</a></code> | <code>string</code> | Enum title. |

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.const"></a>

```csharp
public string Const { get; set; }
```

- *Type:* string

Enum value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#const AppUserSchema#const}

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOf.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Enum title.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/app_user_schema#title AppUserSchema#title}

---

## Classes <a name="Classes" id="Classes"></a>

### AppUserSchemaArrayOneOfList <a name="AppUserSchemaArrayOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaArrayOneOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get"></a>

```csharp
private AppUserSchemaArrayOneOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppUserSchemaArrayOneOfOutputReference <a name="AppUserSchemaArrayOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaArrayOneOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const">Const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.constInput"></a>

```csharp
public string ConstInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.const"></a>

```csharp
public string Const { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaArrayOneOfOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppUserSchemaOneOfList <a name="AppUserSchemaOneOfList" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaOneOfList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get"></a>

```csharp
private AppUserSchemaOneOfOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### AppUserSchemaOneOfOutputReference <a name="AppUserSchemaOneOfOutputReference" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Okta;

new AppUserSchemaOneOfOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput">ConstInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const">Const</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConstInput`<sup>Optional</sup> <a name="ConstInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.constInput"></a>

```csharp
public string ConstInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Const`<sup>Required</sup> <a name="Const" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.const"></a>

```csharp
public string Const { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-okta.appUserSchema.AppUserSchemaOneOfOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



